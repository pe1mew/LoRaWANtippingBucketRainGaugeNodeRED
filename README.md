# LoRaWANtippingBucketRainGaugeNodeRED
A NodeRed flow for a tipping bucket raing gauge on LoRaWAN with a Dragino LDS01

# Notice
**This is work in progress** The documentation and code is at an alpha phase; *Changes may apply anytime without notice*.

# Notes
These are notes that com with the different versions 

# 20-3-2022
The current flow is a HTTP post portal where TTN can submut it's data. The data received is than unified so it can be used in other applications than this one. The *Tipping bucket logic* is calculating mm rain fall from bucket-tips as they are presented by a Dragino LDS01 that presents the times that a door was opened and the current state of the door.

The individual "tips" of the bucket are accumulated over 12 hours and submitted to a mySQL database. 

![flow](/images/flow.png)

### Disclaimer
This repository is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

### License
The LoRaWANtippingBucketRainGaugeNodeRED is free software: 
you can redistribute it and/or modify it under the terms of a Creative Commons Attribution-NonCommercial 4.0 International License (http://creativecommons.org/licenses/by-nc/4.0/) by PE1MEW (http://pe1mew.nl) E-mail: pe1mew@pe1mew.nl

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.

