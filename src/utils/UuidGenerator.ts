export function generateUUID() {
    const generatedUUID = 'xxxxxxxx9xxyxxx'.replace(/[xy]/g, function () {
        const random = Math.random() * 16 | 0;
        return random.toString();
      });
    return generatedUUID;
}