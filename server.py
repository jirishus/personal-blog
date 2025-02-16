from livereload import Server

server = Server()

# Serve static files
server.watch('index.html')  # Watch HTML file
server.watch('*.css')  # Watch CSS files
server.watch('*.js')  # Watch JS files
server.watch('.', delay=1)  # Watch everything in the current directory

server.serve(port=5500, host='localhost', open_url_delay=1)
