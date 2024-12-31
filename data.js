export default function data(static, dynamic){
  return static || data(static, dynamic) || dynamic;
}; //data is deep artificially timed asset

