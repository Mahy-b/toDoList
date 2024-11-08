from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.loginn, name='login'),
    path('logout/', views.logout, name='logout'),
    path('loginn/', views.login_view, name='loginn'),
    path('signin/', views.signin, name='signin')
]