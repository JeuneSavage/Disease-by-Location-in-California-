"""The module for reading data"""
from collector import read_training, read_disease, filter_counties, construct_input, construct_features

def construct(file, year):
    file = read_training(file)
    disease = read_disease(year)
    disease = filter_counties(file, disease)
    tensor = construct_input(file, disease)
    return tensor

def construct_test(file, year):
    file = read_training(file)
    disease = read_disease(year)
    disease = filter_counties(file, disease)
    tensor = construct_features(file, disease)
    return tensor
