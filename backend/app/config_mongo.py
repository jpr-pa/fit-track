from pymongo.mongo_client import MongoClient

MONGO_URI = "mongodb+srv://jaiever143:Hinata&741@fittrack.rzoaeeo.mongodb.net/?retryWrites=true&w=majority&appName=fittrack"

client = MongoClient(MONGO_URI)
mongo_db = client["fittrack_db"]  # Choose a name you want

try:
    client.admin.command('ping')
    print("✅ Connected to MongoDB Atlas!")
except Exception as e:
    print(f"❌ MongoDB connection error: {e}")

