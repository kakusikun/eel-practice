import eel
import cv2
import base64
eel.init('web')

@eel.expose
def open_camera(index):
    print('using camera')
    cap = cv2.VideoCapture(int(index))
    while True:
        ret, frame = cap.read()
        if ret:
            encoded_frame = cv2.imencode('.jpg', frame)[1]
            base64_data = base64.b64encode(encoded_frame)
            data_string = base64_data.decode()
            frame_string = f'data:image/jpeg;base64,{data_string}'
            try:
                status = eel.jsUploadImage(index, frame_string)()
                if not status:
                    break
            except:
                break
    cap.release()
    print('closing camera')

@eel.expose                         # Expose this function to Javascript
def say_hello_py(x):
    print('Hello from %s' % x)

@eel.expose
def start():
    eel.jsCreateCameraLayout(0)

try:
    eel.start('index.html', mode=None)
except Exception as e:
    print(e)