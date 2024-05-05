from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import ForeignKey

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
    total_interior = db.Column(db.String)
    parking = db.Column(db.String)
    lot_size = db.Column(db.String)
    type_style = db.Column(db.String)
    year_built = db.Column(db.Integer)
    property_condition = db.Column(db.String)
    security = db.Column(db.String)
    flooring = db.Column(db.String)
    whats_special = db.Column(db.String)
    topography = db.Column(db.String)
    accessibility = db.Column(db.String)
    zoning = db.Column(db.String)
    utilities = db.Column(db.String)
    investment_potential = db.Column(db.String)
    office_space = db.Column(db.String)
    amenities = db.Column(db.String)
    warehouse_size = db.Column(db.String)
    loading_docks = db.Column(db.String)

    reviews = db.relationship('Review', backref='property')
    properties = db.relationship('User', backref='property')

   
class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  
    comment = db.Column(db.Text, nullable=True) 

    prop_review = db.relationship('Property', backref='property_reviews')
    usr_review = db.relationship('User', backref='user_reviews')