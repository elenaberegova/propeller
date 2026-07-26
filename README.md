# Flight Log Analyzer

Flight Log Analyzer is a Node.js command-line utility for processing drone flight logs stored in CSV format.

The application reads telemetry records, calculates basic flight statistics and generates a text report. The architecture separates CSV parsing, analysis and reporting into independent modules.

## Features

- CSV flight log reader
- Maximum speed detection
- Highest altitude calculation
- Flight duration estimation
- Average speed
- Text report generation

## CSV Format

```text
time,speed,height
0,0,0
1,4.5,3
2,8.1,7
```

## Run

```bash
node index.js
```
