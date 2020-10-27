from django.urls import path

from app.views import classes_list

urlpatterns = [
  path('maratona/', classes_list)
]