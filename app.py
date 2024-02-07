from flask import Flask, request, jsonify
from flask_cors import CORS
from blog_post_generator import BlogPostGenerator  # Ensure this import matches the location of your class

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello from the flask backend"

@app.route('/generate_blog_html', methods=['POST'])
def generate_blog_html():
    try:
        data = request.get_json()
        print("Request Data:", data)  # Log the incoming data
        title = data.get('title', 'Default Title')
        print("Blog Title:", title)  # Log the extracted title
        generator = BlogPostGenerator(title)
        generator.generate_outline()
        html_content = generator.text_to_html()
        return html_content
    except Exception as e:
        print("Error:", e)  # Log any errors
        return jsonify({"error": str(e)}), 500

