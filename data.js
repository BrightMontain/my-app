export default function data(static, dynamic){
  return static+dynamic || data(static, dynamic) || dynamic;
}; //data is deep artificially timed asset

