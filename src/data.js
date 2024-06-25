import phone from "./views/phone.avif"
import tv from "./views/tv.jpg"
import bluetooth from "./views/Bluetooth.jpg"
import laptop from "./views/laptop.jpg"
import headphone from "./views/headphne.webp"
import camera from "./views/camera.jpg"

const blogs = [
    {
        id: 'introduction-phone-001',
        title: "Phone",
        content: "A mobile phone or cell phone[a] is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone). The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network (PSTN). Modern mobile telephone services use a cellular network architecture, and therefore mobile telephones are called cellphone North America",
         picture: phone
        
    },
    {
        id: "introduction-laptop-002",
        title: "Laptop",
        content:"laptop computer, portable personal computer that features a screen, touch pad, and alphanumeric keyboard. Laptops usually have a clamshell design, in which the screen is located on the interior of the upper lid and the keyboard is located on the interior of the lower lid",
        picture: laptop
        
    },
    {
        id: "introduction-tv-003",
        title: "TV",
        content: "Television (TV) is a telecommunication medium for transmitting moving images and sound. Additionally, the term can refer to a physical television set, rather than the medium of transmission. Television is a mass medium for advertising, entertainment, news, and sports.",
        picture:tv
    },
    {
        id: "introduction-headphone-004",
        title: "headphone",
        content: "Headphones are a type of hardware output device that can be connected to a computer's line-out or speakers port, as well as wirelessly using Bluetooth. They are also referred to as earbuds. You can watch a movie or listen to audio without bothering anyone nearby by using headphones.",
        picture: headphone
    },
    {
        id: "introduction-camera-005",
        title: "Camera",
        content: "All cameras are basically a box that light can not get into until a photo is taken.There is a hole on one side of the camera where the light can get in through the lens, and this is called the aperture.On the other side is a special material that can record the image that comes through the aperture.",
        picture: camera
    },
    {
        id: "introduction-bluetooth-006",
        title: "Bluetooth",
        content: "",
        picture: bluetooth
    }

]
export default blogs