from django.db import models

class Priority(models.Model):
    pr_name = models.CharField(max_length=200)

class Types(models.Model):
    type_name = models.CharField(max_length=200)

class Statuses(models.Model):
    status_name = models.CharField(max_length=200)

class Tasks(models.Model):
    name = models.CharField(max_length=300)
    priority = models.ForeignKey(Priority, on_delete=models.PROTECT)
    type = models.ForeignKey(Types, on_delete=models.PROTECT)
    start_date = models.DateTimeField()
    deadline = models.DateTimeField()
    status = models.ForeignKey(Statuses, on_delete=models.PROTECT)
