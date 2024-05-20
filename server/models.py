from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# property has many reviews...ratings
# user has many reviews....in regards to the properties
# ('house',
# ('apartment'),
# ('land'),
# ('commercial'),

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=True)
    phone_number = db.Column(db.Integer)
    message = db.Column(db.Text, nullable=True)
    password = db.Column(db.Text)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'))

    reviews = db.relationship('Review', backref='user',cascade="all, delete-orphan")
    owned_properties = db.relationship('Property', backref='user_properties')


class Property(db.Model):
    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    location = db.Column(db.String)
    property_type = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    bedrooms = db.Column(db.Integer)
    bathrooms = db.Column(db.Integer)
    whats_special = db.Column(db.String)
    amenities = db.Column(db.String)
   
    more_images = db.relationship('Image', backref='property')
    reviews = db.relationship('Review', backref='property', cascade="all, delete-orphan")
    properties = db.relationship('User', backref='property')


class Image(db.Model):
    __tablename__="images" 

    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'))
    url = db.Column(db.String)

    property_image = db.relationship('Property', backref='images')

   
class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  
    comment = db.Column(db.Text, nullable=True) 

    prop_review = db.relationship('Property', backref='property_reviews')
    usr_review = db.relationship('User', backref='user_reviews')