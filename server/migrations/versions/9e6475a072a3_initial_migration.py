"""Initial migration

Revision ID: 9e6475a072a3
Revises: 
Create Date: 2024-05-01 12:02:34.000759

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9e6475a072a3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('properties',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('image_url', sa.String(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('property_type', sa.Text(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('bedrooms', sa.Integer(), nullable=True),
    sa.Column('bathrooms', sa.Integer(), nullable=True),
    sa.Column('total_interior', sa.String(), nullable=True),
    sa.Column('parking', sa.String(), nullable=True),
    sa.Column('lot_size', sa.String(), nullable=True),
    sa.Column('type_style', sa.String(), nullable=True),
    sa.Column('year_built', sa.Integer(), nullable=True),
    sa.Column('property_condition', sa.String(), nullable=True),
    sa.Column('security', sa.String(), nullable=True),
    sa.Column('flooring', sa.String(), nullable=True),
    sa.Column('whats_special', sa.String(), nullable=True),
    sa.Column('accessibility', sa.String(), nullable=True),
    sa.Column('zoning', sa.String(), nullable=True),
    sa.Column('utilities', sa.String(), nullable=True),
    sa.Column('investment_potential', sa.String(), nullable=True),
    sa.Column('office_space', sa.String(), nullable=True),
    sa.Column('amenities', sa.String(), nullable=True),
    sa.Column('warehouse_size', sa.String(), nullable=True),
    sa.Column('loading_docks', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('phone_number', sa.Integer(), nullable=True),
    sa.Column('message', sa.Text(), nullable=True),
    sa.Column('property_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['property_id'], ['properties.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('property_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['property_id'], ['properties.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('users')
    op.drop_table('properties')
    # ### end Alembic commands ###
