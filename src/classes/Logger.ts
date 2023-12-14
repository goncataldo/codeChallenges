enum LogLevel {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export class Logger {
  private log(message: string, level: LogLevel): void {
    console.log(`[${level}] ${message}`);
  }

  public info(message: string): void {
    this.log(message, LogLevel.INFO);
  }

  public warning(message: string): void {
    this.log(message, LogLevel.WARNING);
  }

  public error(message: string): void {
    this.log(message, LogLevel.ERROR);
  }
}
