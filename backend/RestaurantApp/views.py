from django.http import JsonResponse, HttpResponseBadRequest
from .models import Restaurant

def search(request):
    query = request.GET.get('q', '')
    field = request.GET.get('field', None)
    
    VALID_FIELDS = [
        'about', 'address', 'average_cost_for_two', 'average_review_rating', 
        'city', 'country', 'cuisines', 'name', 'imageNum', 'longitude', 'latitude'
    ]

    if field not in VALID_FIELDS:
        return HttpResponseBadRequest("Invalid field provided")

    filter_kwargs = {f"{field}__icontains": query}
    items = Restaurant.objects.filter(**filter_kwargs)

    results = [{'id': item.id, 'name': item.name, 'about': item.about,'location': item.address,'cuisine': item.cuisines, 'imageNum': item.imageNum, 'ave_cost' : item.average_cost_for_two,'ave_rating' : item.average_review_rating, 'longitude': item.longitude , 'latitude' :  item.latitude} for item in items]
    return JsonResponse(results, safe=False)