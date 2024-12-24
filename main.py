import sys
import os
sys.path.append(os.path.abspath("."))
import eel
from engine.features import *
from engine.command import *

eel.init("www")
playassistantSound()

eel.start('index.html', mode='edge', host='localhost', port=5500, block=True)