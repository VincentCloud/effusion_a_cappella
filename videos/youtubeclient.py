from django.conf import settings
from googleapiclient.discovery import build

service = build('youtube', 'v3', developerKey=settings.YOUTUBE_KEY)

def fetch_title(video_id):
    response = service.videos().list(
        part='snippet',
        id=video_id
    ).execute()
    if len(response['items']) == 0:
        return None
    return response['items'][0]['snippet']['title']
