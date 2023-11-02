from .network import make_error_response

from ..constants import (
    AUTHORIZATION_ERROR_NOT_LOGGED_IN, 
    AUTHORIZATION_ERROR_SESSION_EXPIRED
)

import jwt, os

def get_token(request):
    
    return request.META['HTTP_AUTHORIZATION'].split(' ')[1]
    
def decode_token(token):
    return jwt.decode(token, os.environ.get('JWT_SECRET_KEY'), algorithms=['HS256'])

def check_user_authorized(request):
    token = get_token(request)

    if not token:
       return make_error_response(AUTHORIZATION_ERROR_NOT_LOGGED_IN)
    
    try:
        decode_token(token)
    except jwt.ExpiredSignatureError:
        return make_error_response(AUTHORIZATION_ERROR_SESSION_EXPIRED)
    
def get_user_id(request):
    token = get_token(request)
    
    payload = decode_token(token)

    return payload['id']
