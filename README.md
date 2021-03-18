
# Auto enrollment for KMW workouts

## What it does
I used to practice jiu-jitsu almost everyday, but in 2020, when the pandemic hit, I had to change up my workout routine.  I chose crossfit at my local Krav Maga gym.
I soon realized that this class was very popular and filled up very quickly.  So, I decided to write a python script that would enroll me into the class programatically.
A few months later, after exploring Google's cloud platform, I decided it would be a cool idea to move the script to an instance on gcloud.  Once I confirmed that it worked,
I felt that it would be even better if I could create a front-end so that I could enable/disable auto enrollment without having to redeploy my app.  React seemed like a 
good choice since it is very popular and I knew nothing about it.  But, the front-end needed a way to persist state that could be read by the python script, so I also
ended up writing a JSON REST API using express.  The hardest part about writing the API was figuring out why it was responding with unpredictable values.  After some
research, it turned out that the deployment created more than 1 instance to handle the requests.  The fix was simple.  Just had to update the app.yaml file to specify
that only 1 instance should be created.  After making the necessary changes, everything seemed to work.  All that is left to do is add authentication, so that no one can
tamper with my auto enrollment settings.

## Other thoughts
* Record the times at which the classes became open and how long it took for them to fill to see which classes were most popular
* Write a terraform script that could deploy the infrastructure prorammatically.
* Convert the python script to a cloud function
* Support more users other than myself
