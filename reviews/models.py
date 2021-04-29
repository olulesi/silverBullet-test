from django.db import models

# Create your models here.
class Review(models.Model):
    name = models.CharField(max_length=30, unique=True)
    comment = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    score = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.name}'s review on SilverBullet - {self.text} - With the Rating - {self.score}"