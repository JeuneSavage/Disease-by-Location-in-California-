"""A command line control for the predictor."""
import argparse
import tensorflow as tf
from predictor import Predictor
from collector import *


def main(FLAGS):
    with tf.Session() as sess:
        p = Predictor()
        for i in range(2004, 2013):
            print("Predicint for year {}".format(i))
            p.train(i)
        p.predict("something")



if __name__ == "__main__":
    """The main point of entry into the predictor"""
    parser = argparse.ArgumentParser()
    parser.add_argument("predict",
                        type=str,
                        help="Predict values for target years in a folder")
    args = parser.parse_args()
    main(args)
