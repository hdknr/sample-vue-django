# sample-vue-django

Sample Vue.js + Django

- Bootstrap + Vue : https://bootstrap-vue.js.org/


## startproject and articles application

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


## theme


~~~bash
$ python manage.py startapp theme
$ vim app/settings.py
~~~

## yarn

~~~bash
$ pwd
/vagrant/projects/samples/sample-vue-django/web/theme

$ npm i -g yarn
~~~

~~~bash
$ yarn add bootstrap-vue bootstrap@4.0.0-beta.2

yarn add v1.2.1
warning package.json: No license field
info No lockfile found.
warning No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "bootstrap@4.0.0-beta.2" has unmet peer dependency "jquery@1.9.1 - 3".
warning "bootstrap@4.0.0-beta.2" has unmet peer dependency "popper.js@^1.12.3".
warning "bootstrap-vue@1.0.2" has unmet peer dependency "vue@^2.4.2".
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.3.2" while you are on "1.2.1".
info To upgrade, run the following command:
$ curl -o- -L https://yarnpkg.com/install.sh | bash
success Saved 47 new dependencies.
├─ ansi-escapes@1.4.0
├─ ansi-regex@2.1.1
├─ ansi-styles@2.2.1
├─ babel-polyfill@6.23.0
├─ babel-runtime@6.26.0
├─ bootstrap-vue@1.0.2
├─ bootstrap@4.0.0-beta.2
├─ chalk@1.1.3
├─ cli-cursor@2.1.0
├─ cli-width@2.2.0
├─ core-js@2.5.1
├─ encoding@0.1.12
├─ escape-string-regexp@1.0.5
├─ external-editor@2.0.5
├─ figures@2.0.0
├─ has-ansi@2.0.0
├─ iconv-lite@0.4.19
├─ inquirer@3.0.6
├─ is-fullwidth-code-point@2.0.0
├─ is-promise@2.1.0
├─ is-stream@1.1.0
├─ jschardet@1.6.0
├─ lodash.startcase@4.4.0
├─ lodash@4.17.4
├─ mimic-fn@1.1.0
├─ minimist@1.2.0
├─ mute-stream@0.0.7
├─ node-fetch@1.6.3
├─ object-assign@4.1.1
├─ onetime@2.0.1
├─ opencollective@1.0.3
├─ opn@4.0.2
├─ os-tmpdir@1.0.2
├─ pinkie-promise@2.0.1
├─ pinkie@2.0.4
├─ popper.js@1.12.6
├─ regenerator-runtime@0.10.5
├─ restore-cursor@2.0.0
├─ run-async@2.3.0
├─ rx@4.1.0
├─ signal-exit@3.0.2
├─ string-width@2.1.1
├─ strip-ansi@3.0.1
├─ supports-color@2.0.0
├─ through@2.3.8
├─ tmp@0.0.33
└─ vue-functional-data-merge@1.0.6
warning No license field
Done in 22.09s.
~~~

~~~bash
$ yarn add vue
yarn add v1.2.1
warning package.json: No license field
warning No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "bootstrap@4.0.0-beta.2" has unmet peer dependency "jquery@1.9.1 - 3".
warning "bootstrap@4.0.0-beta.2" has unmet peer dependency "popper.js@^1.12.3".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
└─ vue@2.5.3
warning No license field
Done in 18.86s.
~~~

~~~bash
$ cd theme/static
$ ln -s ../node_modules lib
~~~
