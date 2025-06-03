from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)

class Variable(models.Model):
    TYPE_CHOICES = [
        ('boolean', 'Boolean'),
        ('numeric', 'Numeric'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)

class DayEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    score = models.IntegerField()

class VariableResponse(models.Model):
    day_entry = models.ForeignKey(DayEntry, on_delete=models.CASCADE)
    variable = models.ForeignKey(Variable, on_delete=models.CASCADE)
    value = models.CharField(max_length=100)
    class Meta:
        unique_together = ('day_entry', 'variable') # Ensure a variable can only have one response per day entry