from django.shortcuts import render
from django.http import JsonResponse


from rest_framework.decorators import api_view  


# Create your views here.

@api_view(['GET'])
def alc_id(request):
    return JsonResponse("testing", safe=False)
    
