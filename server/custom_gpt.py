
"""
DO NOT CHECK THE IMAGE LINK BEFORE CHATGPT PROCESSES IT! IT WILL BREAK!!!
On the first view of the link from a certain ip, it will give a direct image link, but
on all future visits, it will link to the imgur page, not the direct image!
"""
import dotenv
import os
from openai import OpenAI
from satellite_api import get_image

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


def new_gpt(lat: float, lon: float, dim: float, date1: str, date2: str, special_instructions: str = None) -> tuple[str, str, str]:

    dotenv.load_dotenv()
    client = OpenAI()

    image_url1, image_url2 = get_image(lat, lon, date1, dim), get_image(lat, lon, date2, dim)

    completion = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text",
                     "text": "What's the difference between these two satellite images?"
                             "The point of interest is the body of water centered in the middle of the picture."
                             "Please disregard factors such as color, seasonal changes, and image quality; "
                             "these images may have been taken at different times of day, and times of year."
                             "Most of these images may be in low lighting conditions. If there is no notable change,"
                             "feel free to say as much."
                             "There may be artifacts in these images. Please try and work through them if you can."
                             "Likewise, please ignore land use changes. There may be changes in nearby"
                             "buildings. Please focus your area on the body of water and the things related to it."
                             "If there is an issue with the images, please say so in your reply. Please"
                             "also state if the issue is with one or both images. These images will likely be dark"
                             "or low quality. Please try and do the best you can with the images provided,"
                             "and only state issues if the images are not available at all. In the event that"
                             "one or both of the images are mostly or entirely white, *always* state that analysis is"
                             "not possible because of thick cloud cover, and attempt to analyze the unobstructed"
                             "image if possible. In the event of thick cloud cover, advise the user to 'change the"
                             "date by one month for a crisper image' in your reply. If the images are very dark, it may"
                             "be night when the images are taken. Please *always* note this in your reply as the cause."
                     },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": image_url1,
                        },
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": image_url2,
                        },
                    },
                    {
                        "type": "text",
                        "text": f"What follows will be any special instructions to guide your analysis. If 'None'"
                                f"or left blank, please ignore:{special_instructions}"
                    }
                ],
            }
        ],
        max_tokens=2048,
    )
    print(completion.choices[0])
    print(completion.choices[0].message)
    print(completion.choices[0].message.content)
    return image_url1, image_url2, completion.choices[0].message.content


if __name__ == "__main__":
    dotenv.load_dotenv()
    client = OpenAI()
    new_gpt(36.4081, -119.0903, 0.10, "2017-05-01", "2018-09-01")
    '''
    while True:
        user_input = input("input here: ")
        if user_input in ["stop", "exit", "quit"]:
            break
        new_gpt(33.33, -115.84, "2015-06-01", 1.00, 33.33, -115.84, "2022-06-01", 1.00)
    '''
    '''
        Mississippi River:
        32.733, -91.117, 0.50
        Aral Sea:
        45.0, 59.0, 1.5
        St. Lawrence River:
        45.0, -74.5, 1.0
        Salton Sea
        33.33, -115.84, 1.0
        LA River:
        34.00, -118.2, 0.10
        Panama Canal:
        9.10, -79.65, 0.10
        Lake Managua
        12.33, -86.33, 0.50
        
        # Curated
        Lake Kaweah:
        36.4053, -118.9870, 0.10 - 2018-09-01, 2022-06-01
        good demo of dark comparison
        
        Lake Pyramid:
        34.6538, -118.7722, 0.10 - 2019-08-01, 2021-03-01
        
        Big Bear:
        34.2571, -116.9189, 0.10 - 2015-01-01, 2018-03-01
        
        Bravo Lake:
        36.4081, -119.0903, 0.10 - 2017-05-01, 2018-09-01
        Very good comparison
        
        Lake Isabella:
        35.6672, -118.4334, 0.10 - 2018-02-01, 2018-11-01
        '''
