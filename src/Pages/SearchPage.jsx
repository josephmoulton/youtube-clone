import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "../Components/ChannelRow";
import VideoRow from "../Components/VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon fontSize="small"></TuneIcon>
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
        channel="CSS"
        verified
        subs="2M"
        noOfVideos={200}
        description="This is dummy data for a css based programming channel"
      ></ChannelRow>

      <hr />

      <VideoRow
        views="1.4M"
        subs="2M"
        title="CSS Crash Course"
        timestamp="2 days ago"
        channel="CSS"
        description="In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a..."
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERUSEBEWFRUWFRkYFxgWExgVFhYYFxcXGBgVFRcYKCggGx0lHRYWIjEiJSkrMC4uFx8zODMtNygtLisBCgoKDg0OGxAQGzcmHiYrLS8tLS4tNC0tLS0tMy81LS0tLy0tLS0tMC0rLy0tLSsvLy0tLystLy0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAEUQAAIBAgMEBwYEAwUGBwAAAAECAAMRBBIhBTFBUgYTFVGRkqEUIjJhgeFCcbHBYnLwIyQzc9EHQ1OCovEWJTREg7LC/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQGBf/EADMRAAECAgkCBQMEAwEAAAAAAAEAAgQRAxIUITFRUqHRQWETcYGRsQUVwSIyM/A04fEj/9oADAMBAAIRAxEAPwDm4iR8VjAhAIJv3TqnvawVnGQXIso3UjqrRMqREg9qryv6R2qvK/pMNsoNYWexRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6R2qvK/pFsoNYSxRGg7cqdEg9qryv6THai8r+kWyg1hLFEaD/fVT4mBMzZWqkqttfEv8p/WWsqttfEv8p/WaX1D+A+nyt76b/kD1+FXRETn10aREQiS22JsNsQr1XqJQoUrdZWqXKqW+FEVdajngo9Li9TOl2gC2yMIafwJicQK9uFZhTNEt/wDHnAPztCLzS2JgqrCnh9okVTonX4ZqNKox3DrAzZL/AMQmnZvR9Slati63U0qFQUmyJ1zvVOb3EAIWwCklr23WvKK3CXGwdsHDZ6dWiK2Hq2WtSa65smoZG3pUW9wR368LEW2j0dFXGUsLhsTTrLVAZaoBUKmVmbraZ1R1CtdPy1101bS2bhhS63C40VrMFZKlI0Khve1SmpLZ0013FdL75L2phTgcRQxOBqs1N06/DuyjOoBKulVd111VuBB/ObNp4aji8PUx2GpihUpMgxNAa0v7Riq16B3qC2hQ7uG67EXMqpJAAJJNgALkk6AADeZ0dbo9h8P7mOxvV1rDNRoUevalcAgVXzKgax1UXmnoHURdpYQ1bZeuXfuzG4T/AKysqtpU6i1qq1r9aKj9ZffnzHMT+Zub8bwinbW2KtOmtfD4lMRRZsmYKaVVHtfLUotqNNxBIPhepym17G17Xtpfuk3Ya/3nDm2ntFIXtp/iLpedlWxrY3bFTD17thqOIxLLhhZUdsOKpChRvZ2Ukk3JzNCLgMptext3208YVSTYAk9wGvhOip9N8Y7A1Kgq0msGw5RfZ3Q/7padrAW0BGo01nRbT2mtHaW06YxHslWq9MUsRluKeSxam5X3kV7rdhuy66Qi4zZezBWpYmpny+z0hUta+a9RUsTw+K/0lcykWuCL6i43jvHfO+2XiK9CptOpi0pvWXCo3wqaTt1lLqqtksrqTkb+Ljxlfs3bVfG0cbRxlU1lTCPiKZexNOrRqUgDTI+EEOwIGloRchOkfo7SoKp2hiuoqOoYUKdE16wUjQ1dVWmTvykk2lTsJ0XFYdqtsgr0i992UVFzX+VpM6aU6i7QxQrXz9fUOvFSxNMj5ZCtvlCJtLYtNaRr4XFpiKasFcFDRrUy18uakxOZTY+8pO49xtTopN7Am2+wvb854YaE23ceAve1z9D4Ttuk226+BrnBYKoaFKgqAdWAGrM1NXatVa13LFtx0sBpCLih8on0XYxFXHbKxjIqVMSuJFUKoVXeitWmKwUaAuCL20uunz5n/Z2P/MsH/mj9DCKhVSdACSd1he/5RY2vbS9r20v3X752dDbNXDbJQ4d+rd8dWHWKBnCCnTJVW/Dc5b25Ztp7RrV8GqYLEgdVhSmIwbot6mXMauJp5gVqM1853MpHGEXDqpJsASe4C58JifQaFWlhMFhFpbSGCevR6+qy4WtVqVSzMFXraYOVUykZQd9yd8qul2Nw9ehSYYsYnFrUKvUXC1cOalHLdeszqAzq1hffZtd0IuTiIhEiIhEmTMTJkHBSMV0q7ohd0TrlxySq218S/wAp/WWsiY3B9YQc1rDuvNWMo3UlCWtEzd8ragaRtHTBzjIX/CpIln2SeceX7x2SeceX7zx7DT6dxyvbt0Pr2PCrIln2SeceX7x2SeceX7xYYjTuOUt0Pr2PCrJZ7E23VwucUwj06gy1aVVOspVAN2ddNRwIIIjsk848v3jsk848v3iwxGnccpbofXseFY0ek1Ok3WYTZ2Ho1d4qFqtcoeaklViqHuNjI2B6RMEeliqKYqk9Q1StVnVlqn4qlOqhDKW48D4yP2SeceX7x2SeceX7xYYjTuOUt0Pr2PCmN0tr+0JXRaSCnS6lKIS9AUTe9FkJuwN9STcnusLeNodIQ1FsPh8NSw1J2DVRTZ3aqyklQz1CSEBNwo0EjdknnHl+8dknnHl+8WGn07jlLdD69jwqydG/SgVgPbsHRxTKABVLVKNYhdwqVKRGew7xfvJlf2SeceX7x2SeceX7xYafTuOUt0Pr2PCk4zpPUfqlSnSo0aNVaqUaSlULqQQ1QklnbS1yfytIL7Uqe1Ni0bq6rVnrAr+F3cuct+F2Isb3GhvNvZJ5x5fvHZJ5x5fvFhp9O45S3Q+vY8KwbpSobrqeAw1PE3v1wFQqrb+sp0GY01e+uax11tPFbpItWvXrYnB0KwruHKk1EZGUWHV1EIYKeKm4MhdknnHl+8dknnHl+8WGI07jlLdD69jwpGJ6S1ajYlmRP7xSSkQoKrTSmUKLTF9AAgGt5B2ZtFqHXZVB67DvQa99FqMjFltx9weJm7sk848v3jsk848v3iwxGnccpbofXseFWToKfSjPTSljcLSxa01yozmpSrqo3J11Ihio7jf85C7JPOPL947JPOPL94sMRp3HKW6H17Hhbtp9IWqUvZ6VGlh6GYMadJTeow+Fq1RyWqEcLkD5aTdS6RqyIuMwdHFGkoWnUdqlOoFW+VKjU2HWKL6Bh36yH2SeceX7x2SeceX7xYafTuOUt0Pr2PC9YvpBXfEU8Tdab0sopLTXLTpKmqpTTWyjXQ3vc3vLD/xWFLVaGBw9DEOCGrIahy5gQzUaTMUpMbnUX3mVvZJ5x5fvHZJ5x5fvFhp9O45S3Q+vY8LTU2ixwyYXKMiVXqg65ruqqQeFrIJZYfpIKdMilg6CVzSNE11zhshXIxFO+QVCtwXtc3Mh9knnHl+8dknnHl+8WGI07jlLdD69jwt2z9vBaIw+Iw1PE0UJKK7PTemWN2FOrTIZVJ1K6gmatsbabEKlMU6dGjTuadKkpCgt8TsWJZ3NhdieHCY7JPOPL947JPOPL94sNPp3HKW6H17HhVkSz7JPOPL947JPOPL94sMRp3HKW6H17HhVkSz7JPOPL947JPOPL94sMRp3HKW6H17HhVkyZZdknnHl+8x2SeceX7yDAxEv27jlSI6Hn+/Y8K0XdEwJmdGuYSIiESIiEUjZ+EatVSkguzsFH14n5Df9Jv27sxsNXei2uU6G1synVW+onRdDNm1RRr4ujTZ6gU06IA1Dvo768qn1InrpHsqu2Bo169Jkq0P7J829qf8Au3v8icv1moYgeNVmJYd544Y9vNbohv8AwryM/wB3aWGOHfyXP4HZyvhcTXJIaiaIUC1j1rMpv+VpVzquilammDxzVkzqDhzkvYM2d8oJHC9r/IGaqPSxictehRejuNMUlSy/wMNVI4G8uHvrOAbORzl0Fw7znjJVNHRljC50pg9J9Tee2Ga5qJ2eD2XSoY+pTujXpE4XrbZCzqrUw99OJGvECVu2TXrVadDEYdKVfMFzhMhcOQq5gvusAb+8P2ktpw5wAwlOc+nl1l1yVXQxa2bjfOUpdfPpPpPEdVz14nW7T20MJUbD4SmgWkcrVHRWeqy6MWLXsL3sBNG1adPE4T2tKa0qlNwlZUGVWzAlXVfwm4sRJbSk1SWyBlK/PCY7+vdQ+HADg10yJzEssZHrL07Kv6R7NXD1VRGJBpo12te7rcjThKmfQzSVtp0g6hh7IujAEaUDbQz54d0rDUhe0A4yB958K0XRBjyRhMiXlLlSdn0RUq00JsHZVJG8BmAuPGbNs4UUcRVpKSRTdkBO8hWIubflOp2nifZ9sMtJUAZ6KWKKQAyUySoPwn5iadqI2N2n7K2RVFeot0RVbKCSxYj4jZN54ygpnFwcRJtWeP8Aelyu6HaGloM3V6uH+/XZcfeJ9Er0ccrFcNg8PTog2VGOHcsve7M12J46yi6Y7KFIUawpCiaobPSVlZUZSLlSpIysCCBwlmRTXODbr8JEH3lhuq0kIWNLr7sZtI9s9lQ7Pw/WVadO9s7Kt7XtmYC9vrOkbo1hWqth6OO/tgxQK9BkVnW4y5723iUWwP8A1VD/ADU/+6zs19gp4+pUas/XCqxUOmWktTMbZmW5yhuOkpEPc136Z/tncAb+8wblkhaNjmzcB+6V5ld2vF64CtSKMVYWZSQR3EGxHjNd51OztgPV2i9LFDVc9SqFIGcfFZGNgASy66aHhLkptG9lwWGFL/hf3YrbuJLZifneXdEtBldgDjIX5Tx/5msbIRzgTfiRc2Zuzlhv2Xz2LzsdodGVOPo0lHVpXUOy5g5pWBLqGFwbZTY/MSJiOlZVimFoUqdIGwU01cuN13ZtSTLNp68vDE7p5fg33G7soMNUn4jpXywnPDyuvHuuew4UuockKWGYgXIW+pA42F5J2xSopWdcNUNSkCMrMLE6C+lhxuN3CdJtZqNTB4WrSorTL12zqBoGFrgE65eIHC9pPw+Fpdq4tHRerFNyQFFlGRblRuB32mMxGLpG4G7yIHusohJyaCLyL5Zgn2uXz6J1GD6Tk1Fp+z0Rh2IU0urU+6TbV/iLW/FffJ2xtl0aWOxtGoualTpVdN5sCpFidzZTa8u6nLJ1m4CeM53y98FiZDh8qjpzMsJSunnhcclxMTrNm9JTUrJRfD0fZ3ZUNIU1GVWIFw/xZhe977xPexejqnGYlCnWJhi9kzBetIYqiMxsADxPykup6k64lITx9Ped2XdGw1eXhunMywlK6fe6V+fZcheJ9BWntEm1TBYZqX/C/uyrbuUhswPzvPGztjUaGOxFN1z0hhXcKSCQpCkrmH4h7wuJjMW0A4G6dxn8LIIFxIAnjK9sv+/jquBidfsLagxOItVSipWnUGGQ01SmKhy5Vbv3G2bjbjKzpLiKzMExWHWlWW+ZgmRnU2tcL7pAsfeEyildXqES9Rtn3yWF1C0Mrh0x5fOXbMdeipIiJmWukREIkREIk9KtyBcC5tc6AfnMREkmF0fSXagBpYfC1D1NBQoZSVDs3vO+m+5/QzV0Z2xkrZMS7NQqq1OpmYkBX3PrxBsb915QRMXgDw6m/Xz853+azmJd4nid8Onl5SuXVbAq4anRxtDEVbq7UlVk1LZXf+0QcQt1YjukensLDK2etj6TUhrannao45chAyk/M6TnokeC6ZIcRPHDIC7LBPHbIAtBlhjmTfnir3E4injsTUerVGHBUClmUsgy2VUcj4fdG+2+S9sY8UqGHpCutetRqFxUW7LTX3ctNXaxYXXN8t05aZjwBMZDAf2/nqlpMnZnE74YeRld0XUY/CYfGOcRSxNOgznNUpViy5XPxFGAIYE6/X6SNtbF0aWG9kw9TrbvnrVcpVWYCyooOuUd/EygmJLaEiUySBgPi/Ey6flHRAIMgATifPG7AT6/hdhjNu06ePo1lPWItFFfKeBpZHA+Yv6SINgYUNnO0KRoXvufrivLkto1tN/0nNTMqKAtAqki6XT89e/yrOig8kvaDfPE3T9cLsPhXeL2qK+0PaW91WrK2v4VUqBf/lUXnvE7X6raT4mlZwKzMO5lYsDY/NSfGUMS3gtw6Sqy7KhiHetatPuujq7CwtRs9DG0kpE3y1cy1E/hy2Oa3eDrK7bXswZUwoJVFs1Rrg1WvcsEPwjgBK2JZrHgzLif71z9fm9Q6lYRJrQM/wDWXp8KZsWoFxFJmNlWopJO4AOCSZ0e0tkYV69StU2hTyO7MVVWZ7MxOUDv1tecfMyr6Il1YGV0un5U0dM1rKhaDfPE/hdPV6To2PasUJouvUsn4jSKhD/zaA+k0no9hyc67Qo9TvuwfrQO40ran6znokCgq/sMrgM8MMVJiK/8grXk5Snjh07bq8p7RpUcalXB0myU7ABrlqlgQzEcCwJ0G6bq+ycJUJqUcYlNCb9XUR86ccoCgh7fKUOFxD03WpTYq6kFSN4Il7U2/h6hz1tno1Q6syValNWPeUXS54yr2PBBbPCU5ifrWxxuP4uV2UjHAh8sZykZelW8YYeXW9WG2XorgsIKJbIK1UhnFi+UqHe3AXOg7gJ7O1KPaOMq9auR6NRUa+jFqagAfmROb2xtV8QylgqKi5adNBZEXuUfqeMr5VsN+mTsb++Jn74fi5XfFgO/TKQl2wEsMsVtwjAVEJ0AKk+InW1dpUjjdoVBUXLUoVFQ30ZmC2A/OxnGxM1JReJjlLcH8LBQxBoxIZz2I/Kk7LcLWpMxsA6knuAYEmdA22KQxuLFQ5sPiGZGZNSAWujr32NjOWiH0QeZnKX99Qoo6csEhnP8fBXQp0ew4999oUeq33QOapHcKZGh+ptNmyMdh1rYtqY6mk+GrJTVmubsoCi+vvG17fO05qJU0TnAhzifZXbENYQWNAl5noR16X4blTdlYSlVZlq1xROX3CykoWuPdcj4Ra+tvvbdIsSgw1DDmuuIqU2Zi6ksqIwAFNXbVhpf5TnIlnURc4OJuHS75x5VG01VhaBjcT28sPXosRMxMklimFiIiESVm2KhDLYke7wNuMs5Vbb+Jf5f3mnH/wAB9Plb308A04n3+FB9obmfxMe0NzP4maongV3Zn3XQ1G5LelZj+NvMZ7ztxd/MZGvPYQW3ya7sz7pUbkti124u3mOn+s9DFHmPifl95qygf14zwRpw3/18pHiOzPulRuSke2NzN5vynk4l2/GfEzWKmg0nkPY3EnxH5n3So3Iey3vin4se4+8de6ZzvznzGR2a8ZjIruzPulRuQ9lv6xud/Me+xnlq7D8beeapiK7sz7pUbkp1HEa2zHcNS5Pdm3/WZO0dd7ea3dp+W/WQJ5d7RXdmfdKjclLbGNvDH566acRNL446e8d3Bjr85BeoTPEV3Zn3U1G5Kf2k3O263xQMcedvMZBmIruzPuoqNyVkMS3OfMY9obmfxMr1YjdJFOpf84ruzPulRuSke0NzP4mPaG5n8xmqZiu7M+6VG5D2Wz2huZ/Ex7Q3M/iZqiK7sz7pUbktvtDcz+Jj2huZ/EzVEV3Zn3So3JbfaG5n8THtDcz+JmqIruzPulRuS2+0NzP4mPaG5n8TNURXdmfdKjclt9obmfxMe0NzP4maoiu7M+6VG5Lb7Q3M/iYOIbmfzGapkyC90sT7qQxs8B7Lp03RC7onWLkElVtv4l/l/eWsqtt/Ev8AL+804/8AgPp8rd+nf5A9fhVkRE55dGkzMT3TS99bf9wP3hF5ibhh+8/1od/1nhFHE8PAxNFrmZvzJfd6X7vXf4TPXjgDp+Xh+UiaKOBMTbUrZuH9aTwqk7pKLzE29Qflw1v32t+ontcNpv8AS++1v1kTRRyZEdrm8lY5QoABvf7f6yHJRXuxcNTendkQkORcj8pYew0v+EvlkHo43uOP4wfEfafTsDtXZwpIKiJnCqG/sSfeAF9ba6z3KJwbQMPh1p5AH8LwqVpdEPaaSrI9T/tcHhtlUnYKKdMX/h+V/wBpO/8ACyd1Lyz6f0fw2Dr1FNPDoV1940Mqn3TuLAX+k6vsXDD/ANvT8izC6No2mRo5eg4V7BTuvbS3eZ5XwDFdHaaKWK0za34e82/ecdjgBVYKLANpb5T7J/tFNEOBQChPdByWy3uxO7QndPjGLa7sf4j+plY0tNExwEpnKRV/pwcKWka505XYzC3I1xeZkfDtraSJ5a9dIiIRIiIRIiIRIiIRIiIRJkzEyZDsFIxXTruiF3ROuXGpKrbfxL/L+8tZVbb+Jf5f3mnH/wAB9Plb307/ACB6/CrIiJzy6NJ6Qnh6TzMwi3LhyRv0/r7z11Kjef613eHrPCUCeNvkZk0LAnXhw/Xu4yEQZQRu4g8fyPrPNNwDu/f0M9oqW1PH/Th4+E8sVt89N17fMawpXoYjuH04DTu/rdPCM28A6bt+nymada3DjpHtJ7hChegj309CPy/b0mqoDxP07p6Ndv8AsPSeCxO8wii4jf8ASapuxI1E0yUV10bbVx8lP6z670P2LQNCnWNMM5vcn3gCGI90HQbp8c6PN/aMO9P0I/1n03o70bo4jDGoxfOCw0ItoARpb5z1GkGDE3ECZF3r3C8pwIjXSaCZA3mWXY/C+kbN/wAVfr+hm7aWwOv/AMWvVI5QQF8oGv1vPimBwrrWQPTZTroyEH4TwM+p9AcA9M1XemyBggXMMt7Zr2B+kpSwlmbXa+/pcNrzsFDIy00gonUdxxvN1xxEu0rz1XDdOsItCoaSEkKw1a1/gud380+RE31759Y/2m4j+8Vj3B/+lVX9p8mERxNSjnjKfwrfTWtDqWrhWluV7p7xJUi0RqJKnnL1EiIhEiIhEiIhEiIhEiIhEmTMTJkOwUjFdOu6IXdE65cakqtt/Ev8v7y1lVtv4l/l/eacf/AfT5W99O/yB6/CrIiJzy6NJ6dbfUXnmbC1wAOAP63hF4Bgz0KZ7pmil2APfCLXE90wL6z2QsItMzNgInhju/rjCIEMz1cwX/S02Kraem76n7yFNy04ijppwkKWjUT38N19dDYyHi8NkP8AWmpFvSSoUnYbWrfmpHpf9p32wukdTCqUVVZS2Yhr3vYDQj8hPmdOoVIKmxG4ywo7bqD4gG9D4j/SehDRFE2j8KlF059tr150VDUzqUUtEb5S77iS+07F6d0jUXrKTKddAVYfCeJy2lni+nLn/CpKo72YsfAWA8TPimF6QKDms6sPkG4W0mrF9JGbcCf8xv8A8j/WZiyBb+qfpedsVrF31B/6cO9w349V0XTXGdYKjlgSUbMRuux13T59JeJ2hUcWZtO4CwmmjSLH5TTi6dtK4VcAJLegYZ1CwhxmSZrZhqWhNju0/K9iTNk25NBa/Fbb9wvb8pqmqtxIiIRIiIRIiIRIiIRIiIRJkzEyZDsFIxXTruiF3ROuXGpKrbfxL/L+8tZGxmCFQgkkW+U1oujdSURa3G75W1BUjaOmDnYX/CoYlt2SOc+Ajskc58BPHsFPluF7X3GH1bHhVMyrWlr2SOc+Ajskc58BFgp8twn3GH1bHhVoLHd/XynoUzca63HrqDf6SyXZgH4z37hoe8Qdm/xnwA3bt0WCIy3CfcIfVseFVvT4k7/lv3H954YWNpbHZQO9z4THZI5z4CPt8RluOU+4w+rY8KpmJcjZS8xnrs0a67zf4RFgp8twn3GH1bHhUs3U3bKACLXt37+++ksm2YD+M+AgbLFiMx1+W63d4xYKfLcJ9xh9Wx4VfTV2PxW1PG2vH1I8Zj2a9rtvNuO4gEH1lr7Dv98667gO7d4TV2UOc+EWCny3CfcYfVseFUV8CB8LfQ6cbSG9Mg2ItOi7IHMfAQdkjmPhFgp8twn3GH1bHhc3MgX3TsML0cBUFnIvqAKZZiL2zEDct9NZqxWwsn4yQdzBbXsbEWOoIO8GVEFTEyluFa3UAE57FczTw5O+SVUj3RLYbKF7hz4CDsoc58BLWCny3Cr9wh9Wx4VcQbbzdT+vETwVGUHjex+elx+8teyxa2c9+4THZQtbObflFgp8twn3GH1bHhVES27JHOfAR2SOc+AiwU+W4T7jD6tjwqmJbdkjnPgI7JHOfARYKfLcJ9xh9Wx4VTEtuyRznwEdkjnPgIsFPluE+4w+rY8KpiW3ZI5z4COyRznwEWCny3CfcYfVseFUxLbskc58BHZI5z4CLBT5bhPuMPq2PCqYMtuyRznwEdkDnPgJB+nxBGG4QfUYfVseFYruiYEzOiXNpERCJERCJERCJERCJERCJERCJERCJERCJERCK3w+I1WorC4plGUuFN8hRWGYgEfC2m4g/IyHiiAipmzMCzMQbgFgoyg8fh1I7/lETC390v71WcuJbf8A2clEiImZYEiIhEiIhEiIhEiIhEiIhEiIhEiIhEiIhF//2Q=="
      ></VideoRow>

      <VideoRow
        views="898K"
        subs="2M"
        title="CSS Tutorial -- Zero to Hero"
        timestamp="7 days ago"
        channel="CSS"
        description="Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible ... Code: https://github.com/Video-..."
        image="https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg"
      ></VideoRow>

      <VideoRow
        views="3M"
        subs="2M"
        title="CSS Tutorial - Full Course"
        timestamp="14 days ago"
        channel="CSS"
        description="This is the most comprehensive CSS course we've published to date. So if you want ... ... Your browser can't play this video."
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png"
      ></VideoRow>

      <VideoRow
        views="1.4M"
        subs="2M"
        title="HTML and CSS tutorial 2021"
        timestamp="1 year ago"
        channel="CSS"
        description="In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a..."
        image="https://i.ytimg.com/vi/GAZVvpjxYQY/maxresdefault.jpg"
      ></VideoRow>
    </div>
  );
}

export default SearchPage;
