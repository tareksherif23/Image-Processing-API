import { Request, Response } from "express";
import path from "path";
import { resizeImage } from "../middleware/utils";

describe("tests sharp functionalities", (): void => {
	it("test resize function", async (): Promise<void> => {

    const imageDir = path.resolve('./images');
    const filePath = `${imageDir}/sunflower.jpg`;

		const req = {
			query: { filename: "sunflower", width: 500, height: 500 },
		} as unknown as Request;

		const res = {
			sendFile: (resizedImage: string): string => resizedImage,
			locals: {
				filePath: filePath
			},
		} as unknown as Response;

		expect(async (): Promise<void> => {
			await resizeImage(req, res);
		}).not.toThrow();

	});
});