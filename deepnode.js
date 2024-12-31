export default function deepnode(static_data, dynamic_data){
  return static_data+dynamic_data || Core(static_data, dynamic_data) || static_data;
}; //this is the main recursive function to build an intelegent deep learning model of pretimed artificial asset

