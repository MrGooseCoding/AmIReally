from rest_framework import serializers
from .models import User, Variable, DayEntry, VariableResponse

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class VariableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variable
        fields = '__all__'

class VariableResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = VariableResponse
        fields = '__all__'

class DayEntrySerializer(serializers.ModelSerializer):
    responses = VariableResponseSerializer(many=True, write_only=True)

    class Meta:
        model = DayEntry
        fields = ['id', 'user', 'date', 'score', 'responses']

    def create(self, validated_data):
        responses = validated_data.pop('responses')
        entry = DayEntry.objects.create(**validated_data)
        for r in responses:
            VariableResponse.objects.create(day_entry=entry, **r)
        return entry
