# from pymongo import MongoClient
import  mongoengine as db

def connection_db():
    db_url = "mongodb+srv://shreyas:shreyas@project.kxd4hqz.mongodb.net/?retryWrites=true&w=majority"
    # client = MongoClient(db_url)
    db.connect(host=db_url)
    return db
