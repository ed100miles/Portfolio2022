"""Utility functions for lambda calls"""

import json

def create_response_from_json_list(json_list):
    """
        Creates JSON response with body containing a JSON list
    Args:
        json_list (): json list to format into response
    Returns:
        JSON response object
    """
    response = {
        "isBase64Encoded": False,
        "statusCode": 200,
        "body": json.dumps(json_list),
        "headers": {
            "Content-Type": "application/json"
        }
    }
    return response
