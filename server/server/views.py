from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Variable, DayEntry, VariableResponse
from .serializers import UserSerializer, VariableSerializer, DayEntrySerializer

@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_variable(request):
    serializer = VariableSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_day(request):
    serializer = DayEntrySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def best_combination(request, user_id):
    from django.db.models import Avg
    from datetime import timedelta, date

    days_ago = date.today() - timedelta(days=21)
    responses = VariableResponse.objects.filter(
        day_entry__user_id=user_id,
        day_entry__date__gte=days_ago
    ).values('variable_id', 'value') \
     .annotate(avg_score=Avg('day_entry__score')) \
     .order_by('-avg_score')

    return Response(list(responses))

@api_view(['GET'])
def history(request, user_id):
    entries = DayEntry.objects.filter(user_id=user_id).order_by('-date')
    data = [{'date': e.date, 'score': e.score} for e in entries]
    return Response(data)