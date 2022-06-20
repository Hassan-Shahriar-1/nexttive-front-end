<template>
    <div>

        <div class="container mt-4 mb-4">
    <div class="row justify-content-md-center mt-5">
        <div class="col-md-12 col-lg-8">
            <h1 class="h2 mb-4  text-center">Submit issue</h1>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Your name">
            </div>

            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email">
              <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label>Describe the condition in detail</label>
              <textarea id="editor" class="w-100"></textarea>
            </div>

            <div class="form-group">
                <label for="phone">Primary phone number</label>
                <input type="text" class="form-control" id="phone" placeholder="">
            </div>

            <hr>

            <!-- <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="terms">
                <label class="form-check-label" for="terms">I agree to the <a href="#">terms and conditions</a></label>
            </div> -->
        <div class="col-12 text-center">
            <button type="submit" class="btn text-center btn-primary">Post Now</button>
        </div>
        </div>
    </div>
</div>
    </div>
</template>