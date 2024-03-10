
import dotenv
import os
import requests
from imgurpython import ImgurClient

dotenv.load_dotenv()

NASA_API_KEY = os.getenv("NASA_API_KEY")
client_id = os.getenv("IMGUR_CLIENT_ID")
client_secret = os.getenv("IMGUR_CLIENT_SECRET")


def get_image(lat: float, lon: float, date: str, dim: float) -> str:

    response = requests.get(f"https://api.nasa.gov/planetary/earth/assets?lon={lon}&lat={lat}&date={date}&dim={dim}&api_key={NASA_API_KEY}")

    if response.status_code == 200:
        try:
            # Try to parse the response as JSON
            data = response.json()
            image_url = data['url']
            print(data)
            print(image_url)

            image_response = requests.get(image_url)

            if image_response.status_code == 200:
                # Save the image locally as a .png file
                with open("downloaded_image.png", "wb") as f:
                    f.write(image_response.content)
                print("Image saved as downloaded_image.png")
            else:
                print(f"Error {image_response.status_code}: {image_response.text}")

            client = ImgurClient(client_id, client_secret)
            uploaded_image = client.upload_from_path("downloaded_image.png", anon=True)
            print(f"Image uploaded! Direct link: {uploaded_image['link']}")
            return uploaded_image["link"]

        except requests.exceptions.JSONDecodeError:
            print("Error: Response content is not in JSON format")
            exit(1)
    else:
        print(f"Error {response.status_code}: {response.text}")
        exit(1)


if __name__ == "__main__":
    pass
