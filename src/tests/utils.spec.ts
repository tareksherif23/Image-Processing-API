import path from "path";
import { sharpResize } from "../services/imageProcessing";

describe("tests sharp functionalities", (): void => {
	it("test resize function", async (): Promise<void> => {

    const imageDir = path.resolve('./images');
    const filePath = `${imageDir}/sunflower.jpg`;
		
		expect(async (): Promise<void> => {
			await sharpResize(filePath,500,500);
		}).not.toThrow();

	});
});