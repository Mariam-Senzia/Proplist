from app import app, db
from models import User, Property, Review
from sqlalchemy import text

users_list = [
    {"name": "Juma Hassan", "email": "jumahassan@gmail.com", "phone_number": '0743269763',"message":""},  
    {"name": "Mary Maina", "email": "marymaina@gmail.com", "phone_number": '0726378493',"message":""},
    {"name": "Abby Chito", "email": "abbychito@gmail.com","phone_number": '0725673892',"message":""},
    {"name": "Lorna Wafula", "email": "lornawafula@gmail.com", "phone_number": '0716378493',"message":""},
    {"name": "James Mwendwa", "email": "jamesmwendwa@gmail.com", "phone_number": '0706378483',"message":""},
]

reviews = [
    {"property_id": 1, "user_id": 3, "rating": 4, "comment": "Beautiful home with a spacious garden."},
    {"property_id": 2, "user_id": 4, "rating": 5, "comment": "Stylish urban living in Kileleshwa."},
    {"property_id": 3, "user_id": 2, "rating": 4, "comment": "Serene retreat amidst lush greenery."},
    {"property_id": 4, "user_id": 1, "rating": 4.5, "comment": "Stunning beach house perfect for getaways."},
    {"property_id": 5, "user_id": 5, "rating": 5, "comment": "Contemporary living in a vibrant neighborhood."},
    {"property_id": 6, "user_id": 1, "rating": 4, "comment":  "Sleek and modern living space."},
    {"property_id": 7, "user_id": 5, "rating": 3, "comment": " Luxurious apartment with rooftop amenities."},
    {"property_id": 8, "user_id": 2, "rating": 4.5, "comment": "Cozy yet contemporary apartment in Westlands."},
    {"property_id": 9, "user_id": 1, "rating": 5, "comment": "Opportunity for development or investment"},
    {"property_id": 10, "user_id": 4, "rating": 4, "comment": "Expansive residential land in a sought-after neighborhood."},
    {"property_id": 11, "user_id": 3, "rating": 3.5, "comment": "Spacious commercial space in Syokimau."},
    {"property_id": 1, "user_id": 1, "rating": 5, "comment": "Prime office property in the heart of Westlands."},
]

properties = [
    {"title": "Charming bungalow", "description": "A charming bungalow with a spacious garden, offering tranquility and serenity.", "price": "Ksh 35,000,000", "property_type": "bungalow", "image_url":"https://mansiondeal.com/public/uploads/137264378643786436438.webp","location":"Ngong","bedrooms":"4","bathrooms": 4,"amenities":"Large Backyard","whats_special":"Solar panels"},

    {"title": "In the woods cottage", "description": "A cozy cottage nestled amidst lush greenery, perfect for nature lovers.","price": "Ksh 23,000,000", "property_type": "cottage", "image_url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/497842819.jpg?k=336161b497d9aaccdd356d04e03a4fd7b51fca39c1d885a3ab861554cd876da1&o=&hp=1","location":"Tigoni","bedrooms":"1","bathrooms": "1","whats_special":"Large Backyard","amenities":"Sitting Balcony"},

    {"title": "El Villa", "description": "An modern mansionette with great architecture and spacious backyard.","price": "Ksh 60,000,000", "property_type": "villa", "image_url":"https://a0.muscache.com/im/pictures/miso/Hosting-54382339/original/4fd1343b-387e-4e35-b857-389f7106be6a.jpeg?im_w=1200","location":"Kitisuru","bedrooms":"6","bathrooms": 6,"whats_special":"3 Living rooms","amenities":"Private Pool"},

    {"title": "Eden Green", "description": "An modern mansionette with great architecture and spacious backyard.","price": "Ksh 75,000,000", "property_type": "mansion", "image_url":"https://mansiondeal.com/public/uploads/362532576235765327652.webp","location":"Muthaiga","bedrooms":"5","bathrooms": 5,"whats_special":"Private Gym","amenities":"Outdoor Sitting Area"},

    {"title": "Elegant townhouse", "description": "An elegant townhouse with modern amenities, ideal for urban living.","price": "Ksh 50,000,000", "property_type": "town house", "image_url":"https://i.roamcdn.net/prop/brk/listing-thumb-376w/fbca8d8da3585bb34df626a5cf13f283/-/prod-property-core-backend-media-brk/6348710/0ed96705-bf61-459a-ad05-c048e3dedf71.jpg","location":"Lavington","bedrooms":"3","bathrooms": "3","whats_special":"Open Floor Plan","amenities":"Gormet Kitchen"},

    {"title": "La Casa", "description": "A modern townhouse with great finishes in a good neighbourhood.", "price": "Ksh 35,000,000", "property_type": "town house", "image_url":"https://images.hauzisha.co.ke/tr:w-1300,f-auto,wmp-bottom-right/files/2023/02/15/12617-lP8_20_20_46_img-20221206-wa0030.jpg","location":"Karen","bedrooms":"3","bathrooms": "3","whats_special":"Kitchen Garden","amenities":"Wine Cellar"},

    {"title": "Alfajiri house", "description": "A quaint beach house with stunning ocean views, perfect for beach lovers.","price": "Ksh 40,000,000", "property_type": "beach house", "image_url":"https://wilderness-bookings.b-cdn.net/ord-group-ltd/alfajiri-cliff-villa/photos/diani-beach-diani-diani-beach-view.jpeg","location":"Diani","bedrooms":"5","bathrooms": "5","whats_special":"Indoor Outdoor Living","amenities":"Private Pool"},

    {"title": "Sky View", "description": "A contemporary apartment with an open-concept layout and sleek finishes.","price": "Ksh 15,000,000", "property_type": "apartment", "image_url":"https://masterways.co.ke/storage/property/luxury-2-bedroom-apartment-to-let-in-westlands-2021-04-19-607d49273ecab.jpg","location":"Westlands","bedrooms":"2","bathrooms": '2',"whats_special":"Open Floor plan","amenities":"Expansive View Windows"},

    {"title": "Escada", "description": "A cozy yet contemporary apartment with thoughtfully designed interiors","price": "Ksh 5,000,000", "property_type": "apartment", "image_url":"https://a0.muscache.com/im/pictures/b01038fe-6ca3-466b-9007-595507897752.jpg?im_w=720","location":"Gigiri","bedrooms":"1","bathrooms": '1',"whats_special":"Fully equipped gym","amenities":"Community Pool"},

    {"title": "Skyhigh", "description": "An upscale apartment with luxury amenities, including a rooftop pool","price": "Ksh 10,000,000", "property_type": "apartment", "image_url":"https://a0.muscache.com/im/pictures/miso/Hosting-587489348466693152/original/27856720-fe9c-4ee1-acab-bdf8a2d12ca2.jpeg?im_w=1440","location":"Riverside","bedrooms":"2","bathrooms": '2',"whats_special":"Sitting Balcony","amenities":"Fully rooftop pool"},

    {"title": "Amani haven", "description": "A modern apartment in the coast,perfect weekend getaways.","price": "Ksh 8,000,000", "property_type": "apartment", "image_url":"https://amaniluxuryapartments.com/wp-content/uploads/2021/08/IMG_6335.jpg","location":"Diani","bedrooms":"1","bathrooms": '1',"whats_special":"Open Floor Plan","amenities":"Community Pool"},
]


# User model
def seed_users():
        users = [User(name=data['name'], email=data['email'], phone_number=data['phone_number'], message=data['message']) for data in users_list]

        db.session.add_all(users)
        db.session.commit()

# Property model(not all properties contain all keys(get))
def seed_properties():
        prop_data = [Property(title=data.get('title'),description=data.get('description'),price=data.get('price'),property_type=data.get('property_type'),image_url=data.get('image_url'),location=data.get('location'),bedrooms=data.get('bedrooms'),bathrooms=data.get('bathrooms'),whats_special=data.get('whats_special'),amenities=data.get('amenities')) for data in properties]

        db.session.add_all(prop_data)
        db.session.commit()

#Review model
def seed_reviews():
        reviews_data = [Review(property_id=data['property_id'], user_id=data['user_id'], rating=data['rating'], comment=data['comment']) for data in reviews]

        db.session.add_all(reviews_data)
        db.session.commit()

# function to run all seeding functions
def seed_database():
    
    User.query.delete()
    Property.query.delete()
    Review.query.delete()

    # Reset primary key sequences//postgress
    db.session.execute(text('ALTER SEQUENCE users_id_seq RESTART WITH 1'))
    db.session.execute(text('ALTER SEQUENCE properties_id_seq RESTART WITH 1'))
    db.session.execute(text('ALTER SEQUENCE reviews_id_seq RESTART WITH 1'))

    db.session.commit()

    db.create_all()

    # Seed data
    seed_users()
    seed_properties()
    seed_reviews()

if __name__ == '__main__':
    with app.app_context():
        seed_database()
        print("Database seeded successfully!")