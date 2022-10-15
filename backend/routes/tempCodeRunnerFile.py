import os
import sys

script_dir = os.path.dirname( __file__ )
mymodule_dir = os.path.join( script_dir, '..', 'actions' )
sys.path.append( mymodule_dir )
import addons_actions