from django.shortcuts import render

from app.models import Classes

# Create your views here.
def classes_list(request):
    classes = Classes.objects.all()
    return render(
      request,
      'classes_list.html',
      {
        'classes': classes
      }
    )