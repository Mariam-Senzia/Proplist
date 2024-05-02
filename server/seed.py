from app import app, db
from models import User, Property, Review

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
    {"property_id": 5, "user_id": 7, "rating": 5, "comment": "Contemporary living in a vibrant neighborhood."},
    {"property_id": 6, "user_id": 9, "rating": 4, "comment":  "Sleek and modern living space."},
    {"property_id": 7, "user_id": 5, "rating": 3, "comment": " Luxurious apartment with rooftop amenities."},
    {"property_id": 8, "user_id": 12, "rating": 4.5, "comment": "Cozy yet contemporary apartment in Westlands."},
    {"property_id": 9, "user_id": 10, "rating": 5, "comment": "Opportunity for development or investment"},
    {"property_id": 10, "user_id": 11, "rating": 4, "comment": "Expansive residential land in a sought-after neighborhood."},
    {"property_id": 11, "user_id": 8, "rating": 3.5, "comment": "Spacious commercial space in Syokimau."},
    {"property_id": 12, "user_id": 6, "rating": 5, "comment": "Prime office property in the heart of Westlands."},
]

properties = [
    {"title": "Charming bungalow", "description": "A charming bungalow with a spacious garden, offering tranquility and serenity.", "price": "Ksh 55,000,000", "property_type": "house", "image_url":"https://mansiondeal.com/public/uploads/1hdsbkbfdcbvggbv-min%20(1).webp","location":"Karen","bedrooms":"4","bathrooms": 4,"total_interior": "3826sqft","parking":"Total Spaces: 3, Direct Access", "lot_size": "2.5 acres","type_style": "Single family, Modern style", "year_built": "1994","property_condition":"Remodelled","security":"Controlled access","flooring": "Laminate","whats_special":"Beutiful views,Grass Backyard, Huge center kitchen island"},
    {"title": "In the woods cottage", "description": "A cozy cottage nestled amidst lush greenery, perfect for nature lovers.","price": "Ksh 23,000,000", "property_type": "house", "image_url":"https://w0.peakpx.com/wallpaper/716/731/HD-wallpaper-cottage-cozy-house-garden-nature.jpg","location":"Nakuru","bedrooms":"3","bathrooms": 3,"total_interior": "1926sqft","parking":"Total Spaces: 1, Direct Access", "lot_size": "1.5 acres","type_style": "Single family, Brick style", "year_built": "1990","property_condition":"Remodelled","security":"Gated Access","flooring": "Mixed","whats_special":"Beutiful views,Huge center kitchen island, Solar panels"},
    {"title": "El Villa", "description": "An modern mansionette with great architecture and spacious backyard.","price": "Ksh 75,000,000", "property_type": "house", "image_url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/157237840.jpg?k=ed3b25faba7d9520a72b282ae20e6c8eacef5349de11d753cd630a103746732f&o=&hp=1","location":"Muthaiga","bedrooms":"6","bathrooms": 6,"total_interior": "6500sqft","parking":"Total Spaces: 4, Direct Access & Garage", "lot_size": "3.5 acres","type_style": "Single family, Modern style", "year_built": "2016","property_condition":"Updated","security":"Controlled access","flooring": "Laminate","whats_special":"Private pool,Wine Cellar, Huge center kitchen island, Family Room,Two Master Suites"},
    {"title": "Eden Green", "description": "An modern mansionette with great architecture and spacious backyard.","price": "Ksh 55,000,000", "property_type": "house", "image_url":"https://lid.zoocdn.com/645/430/58098bee5cb06b7eed1077ddd5deb28431cb40ae.jpg","location":"Kitisuru","bedrooms":"5","bathrooms": 5,"total_interior": "4500sqft","parking":"Total Spaces: 2, Direct Access ", "lot_size": "1.5 acres","type_style": "Single family, Modern", "year_built": "2022","property_condition":"New","security":"Controlled access","flooring": "Laminate","whats_special":"Gated community,Beutiful views,Community Swimming pool and Basketball Court"},
    {"title": "Elegant townhouse", "description": "An elegant townhouse with modern amenities, ideal for urban living.","price": "Ksh 50,000,000", "property_type": "house", "image_url":"https://i.roamcdn.net/prop/brk/listing-thumb-376w/fbca8d8da3585bb34df626a5cf13f283/-/prod-property-core-backend-media-brk/6348710/0ed96705-bf61-459a-ad05-c048e3dedf71.jpg","location":"Lavington","bedrooms":"3","bathrooms": 3,"total_interior": "3226sqft","parking":"Total Spaces: 1, Direct Access", "lot_size": "0.25 acres","type_style": "Single family, Modern", "year_built": "2022","property_condition":"New","security":"Controlled access","flooring": "Laminate","whats_special":"Gated Community, Community Swimming pool, Schools nearby"},
    {"title": "La Casa", "description": "A modern townhouse with great finishes in a good neighbourhood.", "price": "Ksh 35,000,000", "property_type": "house", "image_url":"https://edenheightsrealty.com/wp-content/uploads/2021/07/DSC_0054.jpg","location":"Karen","bedrooms":"3","bathrooms": 3,"total_interior": "3226sqft","parking":"Total Spaces: 1, Direct Access", "lot_size": "0.25 acres","type_style": "Single family, Modern", "year_built": "2023","property_condition":"New","security":"Controlled access","flooring": "Laminate","whats_special":"Gated Community, Community Swimming pool, Open kitchen, Schools nearby"},
    {"title": "Alfajiri house", "description": "A quaint beach house with stunning ocean views, perfect for beach lovers.","price": "Ksh 40,000,000", "property_type": "house", "image_url":"https://wilderness-bookings.b-cdn.net/ord-group-ltd/alfajiri-cliff-villa/photos/diani-beach-diani-diani-beach-view.jpeg","location":"Diani","bedrooms":"5","bathrooms": 5,"total_interior": "5526sqft","parking":"Total Spaces: 1, Direct Access", "lot_size": "2.5 acres","type_style": "Single family, Swahili", "year_built": "2002","property_condition":"Remodelled","security":"Gate access","flooring": "Tiles","whats_special":"Stunning views,Direct beach access, Private Pool, Resort Style living, Privacy and Seclusion"},
    {"title": "Sky View", "description": "A contemporary apartment with an open-concept layout and sleek finishes.","price": "Ksh 15,000,000", "property_type": "apartment", "image_url":"https://masterways.co.ke/storage/property/luxury-2-bedroom-apartment-to-let-in-westlands-2021-04-19-607d49273ecab.jpg","location":"Westlands","bedrooms":"2","bathrooms": 2,"total_interior": "1108sqft","parking":"Gated parking garage","type_style": "Modern style", "year_built": "2022","property_condition":"New","security":"Gated access","flooring": "Hardwood","whats_special":"Stunning city views,pOpen Floor plan, Elevator,Balcony,Great amenities such as a fully equipped gym"},
    {"title": "Escada", "description": "A cozy yet contemporary apartment with thoughtfully designed interiors","price": "Ksh 5,000,000", "property_type": "apartment", "image_url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/526925774.jpg?k=1023a822bd30ade9af1feae6fea2544cf44e976986f351b40add338ac98de57d&o=&hp=1","location":"Gigiri","bedrooms":"1","bathrooms": 1,"total_interior": "778sqft","parking":"Gated parking garage","type_style": "Modern style", "year_built": "2013","property_condition":"Updated","security":"Gated access","flooring": "Tiles","whats_special":"Open Floor Plan, Elevator,Balcony,Great amenities such as a fully equipped gym"},
    {"title": "skyhigh", "description": "An upscale apartment with luxury amenities, including a rooftop pool","price": "Ksh 10,000,000", "property_type": "apartment", "image_url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/385494204.jpg?k=c9206212b8ec8f364b61824d9224e6c72c06165955641ce3234d53a5870cb5f1&o=&hp=1","location":"Riverside","bedrooms":"2","bathrooms": 1.5,"total_interior": "900sqft","parking":"Gated parking garage","type_style": "Modern style", "year_built": "2020","property_condition":"Updated","security":"Gated access","flooring": "Tiles","whats_special":"Open Floor Plan, Elevator,Balcony,Great amenities such as a fully rooftop pool"},
    {"title": "Amani haven", "description": "A modern apartment in the coast,perfect weekend getaways.","price": "Ksh 8,000,000", "property_type": "apartment", "image_url":"https://amaniluxuryapartments.com/wp-content/uploads/2021/08/IMG_6335.jpg","location":"Diani","bedrooms":"1","bathrooms": 1,"total_interior": "778sqft","parking":"Gated parking garage","type_style": "Swahili style", "year_built": "2010","property_condition":"Updated","security":"Gated access","flooring": "Tiles","whats_special":"10 minutes walk to the beach, Beautiful views, Open Floor Plan, Elevator, Balcony, Great amenities such as a pool"},
    {"title": "prime land", "description": "A 5 acre land brimming with potential, whether for farming or development.","price": "Ksh 5,000,000", "property_type": "land", "image_url":"https://www.diamondafrikaholdings.com/wp-content/uploads/2019/05/5-Acre-Prime-plot-for-sale-Karen.jpg", "location":"Naivasha", "lot_size":"5 acres","topography": "flat","accessibility": "500meters form the main road","zoning": "Mixed-use","utilities": "Electricity available nearby, Well for water supply","investment_potential": "Opportunity for high return on investment due to growing demand for agricultural land and development in the area"},
    {"title": "premier land", "description": "An expansive parcel of residential land with in a good neighbourhood","price": "Ksh 50,000,000", "property_type": "land", "image_url":"https://i.roamcdn.net/prop/brk/listing-full-1920w/26c8ce76aec17e392387956dd3d22c34/-/prod-property-core-backend-media-brk/6433378/886c4477-cde3-448e-9999-16a79cef608a.jpg","location": "Karen","lot_size":"2.5 acres","topography": "flat","accessibility": "Close to the major road, shopping centers, and entertainment venues","zoning": "Residential","utilities": "All utilities established (Electricity, Water, Sewer, Gas)","investment_potential": "High return on investment due to the desirable location and increasing property values in the area"},
    {"title": "The Cube", "description": "A prime office property located in the heart of a thriving business district.","price": "Ksh 50,000,000 ksh", "property_type": "commercial", "image_url":"https://content.knightfrank.com/property/kecom282/images/bbd5727d-9177-4ff3-8ae4-1edc5d6725a6-0.jpg?cio=true&w=1200", "location": "Westlands","office_space": "30,000sqft", "parking": "Ample parking space available for employees and visitors","amenities": "High-speed internet, conference rooms, cafeteria, 24/7 security surveillance","accessibility": "Close proximity to major roads and public transportation hubs", "investment_potential": "Stable rental income with potential for property appreciation in a rapidly developing area"},
    {"title": "Coral warehouse", "description": "An expansive commercial space with lots of space","price": "Ksh 150,000,000", "property_type": "commercial", "image_url":"https://coralpi.com/wp-content/uploads/2024/01/GW-1.jpg", "location":"Syokimau","warehouse_size": "50,000 sq ft","lot_size": "2 acres","loading_docks": "Multiple loading docks for efficient cargo handling","security": "24/7 security personnel and surveillance cameras","accessibility": "Direct access to major highways and transportation routes","investment_potential": "Steady rental income with potential for lease agreements with logistics and distribution companies"
},
]


# User model
def seed_users():
        users = [User(name=data['name'], email=data['email'], phone_number=data['phone_number'], message=data['message']) for data in users_list]

        db.session.add_all(users)
        db.session.commit()

# Property model(not all properties contain all keys(get))
def seed_properties():
        prop_data = [Property(title=data.get('title'),description=data.get('description'),price=data.get('price'),property_type=data.get('property_type'),image_url=data.get('image_url'),location=data.get('location'),bedrooms=data.get('bedrooms'),bathrooms=data.get('bathrooms'),total_interior=data.get('total_interior'),parking=data.get('parking'),lot_size=data.get('lot_size'),type_style=data.get('type_style'),year_built=data.get('year_built'),property_condition=data.get('property_condition'),security=data.get('security'),flooring=data.get('flooring'),whats_special=data.get('whats_special'),accessibility=data.get('accessibility'),topography=data.get('topography'),zoning=data.get('zoning'),utilities=data.get('utilities'),investment_potential=data.get('investment_potential'),office_space=data.get('office_space'),amenities=data.get('amenities'),warehouse_size=data.get('warehouse_size'),loading_docks=data.get('loading_docks')) for data in properties]

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

    db.create_all()

    # Seed data
    seed_users()
    seed_properties()
    seed_reviews()

if __name__ == '__main__':
    with app.app_context():
        seed_database()
        print("Database seeded successfully!")