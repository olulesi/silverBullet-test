from django.db import models

# Create your models here.
class Review(models.Model):
    RATINGS = (
        (1, '1 - Terrible'),
        (2, '2 - Poor'),
        (3, '3 - Average'),
        (4, '4 - Good'),
        (5, '5 - High'),
      )

    name = models.CharField(max_length=30, unique=True)
    comment = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    score = models.PositiveIntegerField(choices=RATINGS)

    def __str__(self):
        return f"{self.name}'s review on SilverBullet - {self.comment} - With the Rating - {self.score}"