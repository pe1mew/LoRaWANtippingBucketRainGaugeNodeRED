// Payload decoder for Dragino LDS01 to be used in TTN V3 and used with tipping bucket rain gauge.
// The origin if this code is unknown. 

function decodeUplink(input) {
  var port = input.fPort;
  var bytes = input.bytes;
  var value=(bytes[0]<<8 | bytes[1])&0x3FFF;
  var bat=value/1000;//Battery,units:V
  
  var door_open_status=bytes[0]&0x80?1:0;//1:open,0:close
  var water_leak_status=bytes[0]&0x40?1:0;
  
  var mod=bytes[2];
  var alarm=bytes[9]&0x01;
  var data = {};
  
    switch (input.fPort) {
        case 10:
            if(mod==1){
                var open_times=bytes[3]<<16 | bytes[4]<<8 | bytes[5];
                var open_duration=bytes[6]<<16 | bytes[7]<<8 | bytes[8];//units:min
                data.batteryVoltage=bat,
                data.mode=mod,
                data.doorOpenStatus=door_open_status,
                data.doorOpenTimes=open_times,
                data.lastDoorOpenDuration=open_duration,
                data.alarm=alarm
            }else if(mod==2){
                var leak_times=bytes[3]<<16 | bytes[4]<<8 | bytes[5];
                var leak_duration=bytes[6]<<16 | bytes[7]<<8 | bytes[8];//units:min
                data.batteryVoltage=bat,
                data.mode=mod,
                data.waterLeakStatus=water_leak_status,
                data.waterLeakTimes=leak_times,
                data.LAST_WATER_LEAK_DURATION=leak_duration
            }else if(mod==3){
                data.batteryVoltage=bat,
                data.mode=mod,
                data.doorOpenStatus=door_open_status,
                data.waterLeakStatus=water_leak_status,
                data.alarm=alarm
            }else{
                data.batteryVoltage=bat,
                data.mode=mod
            }
            return {
                data: data,
            }
            
        default:
            return {
                errors: ["unknown FPort"]
            }
    }
}