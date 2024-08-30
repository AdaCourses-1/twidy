import { PHOTO_ITEMS } from "@/shared/photo/const";

const PhotoSection = () => {
    return (
        <div className="pl-12 pr-14">
            <h5 className="ml-9">Май (9)</h5>
            <div className="grid grid-cols-6 gap-8 p-5">
                {PHOTO_ITEMS.map((photo) => (
                    <div key={photo.id} className="relative">
                        <div>
                            <img
                                src={photo.photoURL}
                                alt="photo"
                                className="w-40 h-40"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <h5 className="ml-9">Апрель (4)</h5>
            <div className="grid grid-cols-6 gap-8 p-5">
                {PHOTO_ITEMS.map((photo) => (
                    <div key={photo.id} className="relative">
                        <div>
                            <img
                                src={photo.photoURL}
                                alt="photo"
                                className="w-40 h-40 rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoSection;