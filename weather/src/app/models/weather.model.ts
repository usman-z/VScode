export interface WeatherData {
     location: Location
     current: Current
   }
   
   export interface Location {
     name: string
     region: string
     country: string
     lat: number
     lon: number
     tz_id: string
     localtime_epoch: number
     localtime: string
   }
   
   export interface Current {
     temp_c: number
     temp_f: number
     is_day: number
     condition: Condition
     wind_mph: number
     humidity: number
     feelslike_f: number
     uv: number
   }
   
   export interface Condition {}
   