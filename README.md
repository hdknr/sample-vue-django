# sample-vue-django
Sample Vue.js + Django


~~~bash
$ pip install -r requirements/pypi.txt
$ mkdir -p web
$ django-admin startproject app web
~~~

~~~bash
$ cd web
$ python manage.py startapp articles
~~~


~~~bash
$ vim app/settings.py
$ vim articles/models.py
$ python manage.py makemigrations
Migrations for 'articles':
  articles/migrations/0001_initial.py
    - Create model Article

$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, articles, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying articles.0001_initial... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying sessions.0001_initial... OK
~~~

~~~bash
$ python manage.py createsuperuser
Username (leave blank to use 'vagrant'):
Email address: vagrant@ubuntu.local
Password:
Password (again):
Superuser created successfully.

$ python manage.py runserver 0.0.0.0:8000
~~~
