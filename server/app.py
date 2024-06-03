from flask import Flask, request, make_response, jsonify,url_for, session,render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User, Property, Review, Image
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import os
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv
load_dotenv()


app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/dist',
    template_folder='../client/dist'
    )

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'
# cookies seesions
app.secret_key = "abcdefgh"
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
CORS(app)
bcrypt = Bcrypt(app)

# Configure Flask to serve static files from the 'uploads' directory
app.static_folder = app.config['UPLOAD_FOLDER']

# upload folder if not exists
upload_folder = app.config['UPLOAD_FOLDER']
if not os.path.exists(upload_folder):
    os.makedirs(upload_folder)

#cloudinary config
import cloudinary
          
cloudinary.config( 
  cloud_name = "dqgwkixif", 
  api_key = "865799727479877", 
  api_secret = "1r484edxckpzuk19eDXcbJvhMhc" 
)


@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

@app.route('/')
def index():
    return 'Welcome to Prop_Listing'

@app.route("/submit_form", methods=['POST'])
def submit_form():
    # try:
        form_data = request.get_json()
        user_name = form_data.get('fullName')
        user_phone = form_data.get('phone')
        user_message = form_data.get('message')

        new_user = User(
            name=user_name,
            phone_number=user_phone,
            message=user_message
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Form submitted successfully'}), 200

# CRUD operations for User
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(name=data['name'], email=data['email'], phone_number=data['phone_number'], message=data['message'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'name': user.name, 'email': user.email, 'phone_number': user.phone_number, 'message' : user.message} for user in users])

@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user:
        return jsonify({'id': user.id, 'name': user.name, 'email': user.email, 'phone_number': user.phone_number, 'message' : user.message})
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if user:
        data = request.get_json()
        user.name = data.get('name', user.name)
        user.email = data.get('email', user.email)
        user.phone_number = data.get('phone_number', user.phone_number)
        user.message = data.get('message', user.message)
        db.session.commit()
        return jsonify({'message': 'User updated successfully'})
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/delete_user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'})
    else:
        return jsonify({'message': 'User not found'}), 404

# CRUD operations for Property
@app.route('/properties', methods=['POST'])
def create_property():
    try:
        #form data
        title = request.form.get('title')
        description = request.form.get('description')
        price = request.form.get('price')
        location = request.form.get('location')
        property_type = request.form.get('property_type')
        image_file = request.files.get('image')
        bedrooms = request.form.get('beds')
        bathrooms = request.form.get('baths')
        amenities = request.form.get('amenities')
        whats_special = request.form.get('whats_special')
        additional_images = request.files.getlist('additional_images') # more images

        # print(f"Received image file: {image_file}") # Debugging line

        if not image_file:
            return jsonify({'message': 'Image file is required'}), 400

        # Save image file to server
        image_filename = os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename)
        image_file.save(image_filename)

        # Create a URL for the saved image
        image_url = url_for('static', filename=image_file.filename, _external=True)

        new_property = Property(
            title=title,
            description=description,
            location=location,
            price=price,
            property_type=property_type,
            image_url=image_url,
            bedrooms=bedrooms,
            bathrooms=bathrooms,
            amenities=amenities,
            whats_special=whats_special
        )
        db.session.add(new_property)
        db.session.commit()

        # Remove the main image from the list of additional images
        if image_file in additional_images:
            additional_images.remove(image_file)


        # Verify additional images
        print(f"Number of additional images: {len(additional_images)}")
        if not additional_images:
            return jsonify({'message': 'No additional images provided'}), 400


        # uploading additional_images[] to cloudinary
        for image in additional_images:
            image_upload = cloudinary.uploader.upload(image)
            url = image_upload['secure_url']
            
            # add to db
            new_image = Image(property_id = new_property.id, url=url)
            db.session.add(new_image)
        db.session.commit()

        return jsonify({'message': 'Property created successfully'}),201
                       
    except Exception as e:
        return jsonify({'message': f'Error: {str(e)}'}), 400

@app.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    return jsonify([{'id': property.id, 'title': property.title, 'image_url': property.image_url, 'description': property.description, 'location': property.location, 'property_type': property.property_type, 'price': property.price,'bedrooms': property.bedrooms,'bathrooms' : property.bathrooms,'whats_special' : property.whats_special,'amenities' : property.amenities} for property in properties])

@app.route('/properties/<int:id>', methods=['GET'])
def get_property(id):
    property = Property.query.get(id)
    if property:
        return jsonify({'id': property.id, 'title': property.title, 'image_url': property.image_url, 'description': property.description, 'location': property.location, 'property_type': property.property_type, 'price': property.price})
    else:
        return jsonify({'message': 'Property not found'}), 404

@app.route('/properties/<int:id>', methods=['PUT'])
def update_property(id):
    property = Property.query.get(id)
    if property:
        data = request.get_json()
        property.title = data.get('title', property.title)
        property.image_url = data.get('image_url', property.image_url)
        property.description = data.get('description', property.description)
        property.location = data.get('location', property.location)
        property.property_type = data.get('property_type', property.property_type)
        property.price = data.get('price', property.price)
        db.session.commit()
        return jsonify({'message': 'Property updated successfully'})
    else:
        return jsonify({'message': 'Property not found'}), 404

@app.route('/properties/<int:id>', methods=['DELETE'])
def delete_property(id):
    property = Property.query.get(id)
    if property:
        db.session.delete(property)
        db.session.commit()
        return jsonify({'message': 'Property deleted successfully'})
    else:
        return jsonify({'message': 'Property not found'}), 404

# CRUD operations for Review
@app.route('/reviews', methods=['POST'])
def create_review():
    data = request.get_json()
    review = Review(property_id=data['property_id'], user_id=data['user_id'], rating=data['rating'], comment=data['comment'])
    db.session.add(review)
    db.session.commit()
    return jsonify({'message': 'Review created successfully'}), 201

@app.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([{'id': review.id, 'property_id': review.property_id, 'user_id': review.user_id, 'rating': review.rating, 'comment': review.comment} for review in reviews])

@app.route('/reviews/<int:id>', methods=['GET'])
def get_review(id):
    review = Review.query.get(id)
    if review:
        return jsonify({'id': review.id, 'property_id': review.property_id, 'user_id': review.user_id, 'rating': review.rating, 'comment': review.comment})
    else:
        return jsonify({'message': 'Review not found'}), 404

@app.route('/reviews/<int:id>', methods=['PUT'])
def update_review(id):
    review = Review.query.get(id)
    if review:
        data = request.get_json()
        review.property_id = data.get('property_id', review.property_id)
        review.user_id = data.get('user_id', review.user_id)
        review.rating = data.get('rating', review.rating)
        review.comment = data.get('comment', review.comment)
        db.session.commit()
        return jsonify({'message': 'Review updated successfully'})
    else:
        return jsonify({'message': 'Review not found'}), 404

@app.route('/reviews/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return jsonify({'message': 'Review deleted successfully'})
    else:
        return jsonify({'message': 'Review not found'}), 404


# CRUD for Image
@app.route("/images", methods=["GET"])
def get_images():
    images = Image.query.all()
    return jsonify([{"id": image.id,"property_id": image.property_id,"url": image.url} for image in images])

@app.route("/images/<int:id>", methods=['DELETE'])
def delete_image(id):
    image = Image.query.get(id)
    if image:
        db.session.delete(image)
        db.session.commit()
        return jsonify({'message': 'Image deleted successfully'})
    else:
        return jsonify({'message': 'Image not found'}), 404
    

# User authentication
# register user
@app.route('/register', methods=['POST'])
def register_user():
    form_data = request.get_json()
    user_name = form_data.get('name')
    user_email = form_data.get('email')
    user_password = form_data.get('password')
    # name = request.json.get('fullName')
    # email = request.json.get('email')
    # password = request.json.get('password')

    user_exists = User.query.filter_by(email = user_email).first()

    if user_exists:
        return jsonify({'error': 'User already exists'})
    
    hashed_password = bcrypt.generate_password_hash(user_password)

    new_user = User(
        name = user_name,
        email = user_email,
        password = hashed_password
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"id": new_user.id,"name": new_user.name,"email": new_user.email })


#login user
@app.route('/login',methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email = email).first()

    if not User:
        return jsonify({"error": "unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "unauthorized"}),401
    
    # cookies server sessions
    session['user_id'] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

#upload image to cloudinary
@app.route("/upload", methods=["POST"])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No image part"})
    
    file = request.files['file']
    property_id = request.form['property_id']

    if file.filename == '':
        return jsonify({"error":"No selected file"})
    
    result = cloudinary.uploader.upload(file)
    url = result['secure_url']

    # Create an Image object and add to the db
    image = Image(property_id=property_id, url=url)
    db.session.add(image)
    db.session.commit()

    return jsonify({"property_id": property_id, "url": result['secure_url'] })




if __name__ == "__main__":
    app.run(port=5555, debug=True)