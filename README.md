<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chicken Website - README Example</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <style>
        body {
            background-color: #f8f9fa; /* Light background */
        }
        .container {
            margin-top: 50px;
        }
        .jumbotron {
            background-color: #ffc107; /* Chicken-friendly yellow */
            color: #333;
        }
        .btn-chicken {
            background-color: #28a745; /* Green for healthy chickens */
            color: white;
        }
        .btn-chicken:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Welcome to the Chicken Website!</h1>
            <p class="lead">This website is dedicated to all things chicken. Learn about breeds, care, and more.</p>
            <hr class="my-4">
            <p>Explore our resources and join our community of chicken enthusiasts.</p>
            <a class="btn btn-chicken btn-lg" href="#" role="button">Learn More</a>
        </div>

        <div class="row">
            <div class="col-md-4">
                <h2>Chicken Breeds</h2>
                <p>Discover different chicken breeds and their unique characteristics.</p>
                <ul class="list-group">
                    <li class="list-group-item">Rhode Island Red</li>
                    <li class="list-group-item">Leghorn</li>
                    <li class="list-group-item">Plymouth Rock</li>
                </ul>
            </div>
            <div class="col-md-4">
                <h2>Chicken Care</h2>
                <p>Learn how to properly care for your chickens, including feeding and housing.</p>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Feeding Tips</h5>
                        <p class="card-text">Ensure your chickens have a balanced diet for optimal health.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h2>Community</h2>
                <p>Connect with other chicken lovers and share your experiences.</p>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Join Now</button>
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
