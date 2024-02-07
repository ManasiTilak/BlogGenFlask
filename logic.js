function generateBlogPost() {
    const title = document.getElementById('blogTitle').value; // Get the value from the input field
    fetch('http://127.0.0.1:5000/generate_blog_html', { // Make sure the URL matches your Flask app's route
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the request body format as JSON
        },
        body: JSON.stringify({ title: title }), // Convert the title to JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Assuming the server responds with HTML content
    })
    .then(html => {
        document.getElementById('blogPostContent').innerHTML = html; // Display the generated HTML content
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('blogPostContent').innerHTML = '<p>Error generating blog post.</p>';
    });
    console.log("hi")
}
