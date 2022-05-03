"""AWS Lambda handler for scrabble project"""
from trie import scrabble
from lambda_utils import create_response_from_json_list

def return_words(event, context):
    """TODO"""
    try:
        board = event["body"]["board"]
        user_letters = event["body"]["userLetters"]
        output = scrabble.find_words(board, user_letters)
    except Exception as e:
        output = str(e)
    return create_response_from_json_list(output)

# if __name__ == "__main__":
#     # event = {"body": {"board": {str(index): "" for index in range(225)}, "userLetters": "at"}}
#     from pprint import pprint
#     import json
#     pprint(json.dump({str(index): "" for index in range(225)}))
# #     print(return_words(event, 'blah')){

