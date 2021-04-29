from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Review
from .serializers.common import ReviewSerializer
# Create your views here.

class ReviewListView(APIView):

    def get(self, _request):
        reviews = Review.objects.all()
        serialized_review = ReviewSerializer(reviews, many=True)
        return Response(serialized_review.data, status=status.HTTP_200_OK)

    def post(self, request):
        review_to_create = ReviewSerializer(data=request.data)
        if review_to_create.is_valid():
            review_to_create.save()
            return Response(review_to_create.data, status=status.HTTP_201_CREATED)
        return Response(review_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

