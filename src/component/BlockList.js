import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image } from "react-bootstrap";
import Details from "./Details.js";
const BlockList = props => {
  const { blockList, setBlockList, addLike } = props;
  const delBlock = item => {
    let arr = [...blockList];
    let idx = arr.indexOf(item);
    if (idx !== -1) {
      arr.splice(idx, 1);
      setBlockList(arr);
    }
  };
  const clickLike = item => {
    addLike(item);
    delBlock(item);
  };

  return (
    <div>
      <h1>Block List</h1>
      <Row xs={1} md={4} lg={5} className="block-list">
        {blockList.map(item => (
          <Col key={item.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              fluid
            />
            <div>
              <span onClick={() => delBlock(item)}>
                <img
                  src={"https://pic.pngsucai.com/00/18/69/47bae1a6a01fbb0d.jpg"}
                  width="10%"
                  height="10%"
                  alt="delete"
                />
              </span>
              <span onClick={() => clickLike(item)}>
                <img
                  src={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX////tHCTsAADx8fH19fX7+/v39/f5+fntFyDtERvtGSHtCxfsAAztDxrsABDsAAr84OH+9fX709TwWFz6zc772dr85OX96uvwVFjvQEX1lpjydHf+7/DxXmLuMjj0kZPuKTD5wcL2nqD3q63ze371nJ7xam3uNzz0iYzzfYDvS1D4uLn3r7H2pKb4vb7vR0zxZWjgGiHgAAD0hYj0//7iPULgFB3w5ufmJy7phYjvJCzyb3PojY/qoaLD67uXAAAWNklEQVR4nO1diXbiurK15dnyEIYwJGAgAxASEtLJ7ZML7/7/bz1VyfJAGCzbdOiz2OesTrqDFZVUqknStqJccMEFF1xwwQUXXHDBBRdccMEFF1xwwQUXXHDBBRdccMFPQTdP0apmnKBRQyvzlG6eQkTNOoGIBmtV/ildt4z6RdQMs/5ZNFir8rOo66w7tSsqE87Q6xYRhNMNWRF13TA1rW5FZWNtQau1imjARGiaKddTUGv434L/EYPrZnNQsS9ML2CkmXww3p3J3Wh0N+lUbBSas0zF0qU7o+tssPncN+6HLgEEvXs2+p3r5nW5fmmsUc3UFOuz+aCy5hgIWc+rjZyhmaxVOQkNA8eb6TZoU2dDQsdVAa4T0j7hmD1N5HQNlAGUQjGV9oJQ3iKDHZD5w2o1/bhvllBeC9WULW4ZCQ1NQxEt1Ow5oWoWtvhKCXm4kuiKBuqAY31LHBwv27a5nJT6jk89QoavcvIpumaiiFJmBoYERYQ/Bv0QuuCHbNbykmLPyLRRVEBdMVFEszHzQLyAqP232djNNegQeykloInm3tCkzAx4QS6irgwcnwvyfNVtzIWIPq5Jm4/+ptXaPLaPt8pa5CL2KT73iEv5OYzbdKmPDbqheryxpFF0FKZUTGPgAoxFVJQ1qBP5wIkyvHi86YPS6LQf31DXXN9xKLMXt9cHWrXQfjJf+Nl9Hq6hiY/4J/ECV93ZxyoiIQjpko8DTW3JJ0QsDhPWIHhBHUblNmC/0bvnP+oSoUoL/g+dlZNV2GF3b6vM1imG9Wm9/OeX7+PHg2feSdGm/cb+NrjvE5DRi3oPy0MjxsE8q8L8q6yOskWrwUTqSufJ4WpJ5rw3wvw5q/iza7GIXK679/saNXToxaPz6ysSI0K4ixBziBIytPsgou0wsxMdW5GmZWp6bBcLApyDZUB4YH3+M00NOmnij/uxGXXHT8+wiJ7FBKgRCeCz5HZnRxQIqj4nX+7sPUoMS/iCP3yzt0atleiFHTrPB8Rj3QUJTVMm6NbAp4CXNz7vspaT8p7fC4lcykzr29NCOA4yGNwE8Plw+L1RC6Mi64HNXxTZnmjT5x+9E236ZPrKlvuSpL+WrcjhvulhUSX8ybyPjIZqIiTWG73sL2Ii8A88Zf2FTe3kx8z6NW7hEfK03aiBrTKnE32tHbJ4SRZen/88nTNmod+WM9Goi3aMjnfHO6Zp6PE3EgJi1IjPdSI06F4qAhrTSS9jWbJD7eHA4PCTbZfNZlDXB6rvRu9+n2n72M7oRWNym2vJCZJ4ot9cEKbSjrpLRMgx+fKTCdZYCMN8PCRNHXUNY7hpTP1YBFXpvH7YOKoB8bblJLFJWHrgPPJ6xVo0zcbvr3G0pvixl9gBOqun1YxHEW4YuFtNqvZYUV7BeTjj7101oJ8md2jFrYyp8zxCV/5hA6c6lGleM9FViGigFzYZdZdDj4TUTjoViD68gm0N73LDxgbsn/Yi+pq9r3mE9xiI+YpdvBoEzyM7E6ciPPCJA5jw4Lv50nQ2bsy7WpIJBfOAMDLKf9gM+hEqxzQ/XTaZcat6ff/Ud5jU+I9PPHBrjEGrVHedi+Ma//uP+uvrK/r6jZFKZ5Ff4KoT8nhisqEkXdhsCnFuBtAk+R7jWMz3QISry4XqMOua9flfppTxL7jJdMd1PNLPWm9jcD0By0jjDkwDMQw36Yce6fv7OHqf/Y7WXgca5EPmkNBjmROzyIv7ZEDa84jFgnxaSRzSt1kPnLfvfWW6YZVIpJnZ+7SeYU04+GunXEDKU8PW3fdEAj0ieYRvJ+lohFH8yU5E3DWT7308Zm3OntV4DYa9q+cly35fmltx+2Byg+5kLsKja/CXZEd4o8ulSwka/3Wwoz7zQ90ZH0+mRVfXV3tSiA8UccEk2mQ8iU1wsl8xBFvPmJ/ANRzGSeZ3l5LBlLXjxWrRVbGFYL7jc4aUIxR4UX8L68EcF1eog91RlAeCSje92viJPqvcvD7DInLZz7+irBWh3sEcEKNfHkQ11rwLdrTrg2UqpA8k+hJ9cWKFIrvGL4sbtC8+SayEo1Iu4tCHJOm5HUTr7PQOj2SUEDm56FYXQi2c8Y6iSYl6wHDLzKFCvRx9rO162UfoSlnhNHRZtEKmYA+z7a0nRxu8DbnqZB60d9hTeWDDea9EabPIkyOe1/G+zBpQ+GDf9HyVJ3qjJFAjTqEEfgg9CdR5ZmW7NYiIASOZZ6sKpFWwRNG4Y8lrnPOP4B9QRNWJ4/ANV2F7dlwhODDEdVMBcT1XrTo2UMAXZSNCDuYkinYI0Hke9dEucDMKazBJnZU7zApJ0ZIOrMVsqEFVn4dxlQBGGkQaqPHQ0U3xDnE00ObEIQgOVJIvGqxRf3Xg2W10eySxzWEPbU7wINmfPDoEZMLODHmNyZNvJHb6IOJN7Evjdffm7PbbB9AeEj5iFCQb73H8xfFBUy1q37HU1t4RKh3FPBbxpSOMC8HgZMqsbbCRbW3wikYhgFD+iqTloXJgi5mmns9x1eCxTDNT7kXDZBUFYE3BNtpOCf/FyyQ4SiMvKaaUwjVrKjVWj54YfGm0EkMVr+YPpbmmYApLqVgE68Xpwbe+q/rTUn1CQF3WHY6nKBZ4Wn9HwaUQFnkR6eMUXEVZd9bmkwg2GfJKUn5TbgT9cmxKwJst5M1CBluRUQAm0SmtXy20qEy9rqCL5HhAtA8fwruy3O4h3JlXF8ZNaueFuZ+VU3lFhHx2f4Xljp1JRjGMEt2yMRxxq+zRdlYkpE4Sx9FsRiwNXpuzuely3dKq9ZBGSJgYVPI8zF/fP7TeiEd92NB4qLb/OcxVMMv27HqrOiq7ibcTV8vb1WY+kY2MttFItQFEpOXae3Ny41R+PZ8C+eGnMrHf7jbouqKK1o5ki5ErWBmzDKvQjqP5Kl71RGgnEwAJldMq0QRLe+mo/YYNeXt3yH4MN0kN2UWnKO96oLIN9clJWJuVqRW3kHoRZpWjjsK66klt9COWnuqu2de7oKyanxYtR/Ve2o+vMHcbXy7P5HhiOfRGiffOSkbcp8SbLbZT0eqUSPZZHBrc8K/JTuE5oeekmglm35N2ibN4jKDgY8/q7V0d2FA1GMXfQ2pNpIOkiEuIQS6VzsRPD2ZARdUOc315CdkcBstO8x4KuyUM1cnBMn3XZV8HV10sBclLCHvXlBCsXNdSW64ZsJNBmnPYAJveUC6tHD4y0btETfPPAU4vUHT7Pt29nXgEL2ncZ1cqZ50Ky1xgmlid4rhKA293fI5z2MhlFyVSxLtM8Yj2TtDDyrjJ9FCcw5FBlE0xpTYr/hSamUksYQuz23RwbvcEPayKVVrbckpkwOkRAzrzz3ISs3ustEQVEFPoMKAh6SlD5xzjtjt01QGF8zZlMnTmLNxxZ/7xcsXT6cpbkbUDT/OFy/nHwi4t4Vr8hUXf4bll+biRhTnT1Ffp4aMhO/HKwr5kY4jl02U0/aS4x2192AtjmWKZwBn3nYSjZ+H32S3EIeatcMyKlNu6aISZ58DzhHV2rwbgsQVYR2glytQgWG7P129z9Agx6pml+RhU4tJhKUK58woQ2LKhebFJEITnV8hAb+a98LsCJcJuhQe2/rRJxEmaM9NSHpR6qwbOhMRFqwygyEaTuxNlQtsT4lWNL39hzFYyu8PsJD0LRcuN02nwkKiWWy7s5rjPJWBld7BOgV4u+a1w3mSaa8g/m0x/mDv2WCmgbOV3sO6OP/EngKca0ypStULgQzxa8Wmts6jtQ7TlejfJ4FfsFQbwhNz4bjWFrxFQfCBNJRI1jIpZD5xXpZOGOGl1Bjvd0JPwhpn6KaGOU30OMeiDrTU8GnoO4TebwvgMe3M6hLstYUUbzxwObg8MzmQSm7lMgkU2lUf9UZz+40fAfnwlsmWTZuZwXbXCiSiORujGEVtQw7Kujr6t0lE3VsxXUv0cE1OEkK/sqxma09bP7nfjHWhK+JUjOCNch2mAeilpT+LLIQ7p/eQ0ipvjBG7RPQTiiHw14MEVJ40hHPKDu4lJJZ8u8A6dU0vKM9+6NeOSaufjK2CTdoU+4U2JejKeXvaErx+N3d33zyuh0MHOXJwc36Oq3iqgnzmGOf31FbmkVNngUFeKECC08jnF0Rt0isRly4U4pmg7+qvzzkSs1/UbRbinbkNZASW4p8QuiOv8n/I5oe+RHdTN6XRUxEfeh+S62AE6Cg4QsLiIOHwODf7HuvO5VL+isGookQFcNbaOzWK8W0he+/E1o+ERr8UEhCaLXrlEVoHW5loxdMv8bH19jes7vYAqauqaflBE3xWB8QtcmjkaypjIHaEVJjgB2gAWsemcMqdrv0deqeszuwA3sGMSsf0feuBBIyjmwCtynlSzQMji14IhlrBXcOPd0qx/msP3dY3lRR0Gm3VHt/Z+hB9Y5hfVQJ8KHJbUdEuXoRWc0nXkN2GwP+8DW2WKUpOa6pyYSTvsu9CY87wQLA49tl8Id9aBe0PZP2jb6JDo6/2LWYTPp/iYfD07ipwgQNcP8SA0p/wwNhTxcfvdDY6Mrsa5p+SIIW9+RdHvhaHc/5rF1dg6IhtTT+i19qGTXqskrzxKPuaNYQ1yBjGZvhhvv8fR7/6gFX2Ja+ZBVLX4ZqQMYvvUaZm5GuvSe6TEOOKprJRBrHBPgBOlMQYuC3WspteenWrppx5TchkH3PImH/YjB9fBG3SGCdQm3MNKwNCAA2v8m63FHBNCtevizFtZrD8m52naiRXuZedI73ZxMmWh6ZoB/1myXF+6pnT7v6JxIpzLRayS82som75/CjkH0zzDH4J0BQdhMYWzgNSseD9MoFm0NCC9fArEorfdMWc5LFu5gQ4YQHp5gJ/yJTYr6SG9I1kN0kTxVo3iJCcWstAZSJyoNHuc7cuh10Yfwwx7XSoG19F6WsBZtfd5TvcB60Bsg7n2YZXR0GABl59Ep9LEhk9758kTJ055ZlzqVpWlxySvh6gNVzSpw7xwqqEjZ150ZpuxVTkyM93gDJxJIjKzxaZkn99WlS8GAXuYzu3LfgnhMAIVBZPmU8s+9qsgdNc4D5wEDw/QnCIDZzrtTSRSAVdorJGz0X2VDODYxIEJBaK0A5/6QNadpGmgujkYKZo6JvWaJaOirCMsfgUCrWwqCRt4tgNn43nS5hKykMr5deBaBgLAgy6ZUxKKXUuwp8FB+kuIsy1Y1pJcX8DvCzyEWc0GQgrH7SgNQSTHfH9fyvmDlrIeHYpGxS1kfmEYj7EdCfaRtItNoyzPEHOc+hZJuQGewg7bt5kinCNVncLOHKIda6/TLdBXtiZtu8AhV1hMuoSbEGCuZbsnA+BqctML6C5upMrwERwh+Z2n/Euw97WEvwbHjbZZRj7A9740omwk5UYzjK6kdqYO9MXIMdS5Ef6VFkq5zeIJYfapHd7FyPJgOitmfVw4oiTR6v5YLT98sYYE/UIGu9TbEPZglKY1UD5pY15TR/GmsebanxNTagnUhet+LCJPZ7CUUsP+ojEWlHAJqacaHKuNngqoqJTE902QzbD63ZMezh3c/29yjjFKYtrpHwAwxdKn5Bb0iNawJctZzmwfNpWw1O7dPv/ceTOIM5JD5FdT4EymFXfe+DV7N8D6CNQNvYI03icCBuF8Dq959O+6FSg9mk+UW+gAlzMQSe0im/2TaCa7lB1xHrL8zlu7Lyhn7Qg8CRBJVaecq4o5iYs1q9S2J0SlcrjNhDF0oQwwwT6D26uQBQPlvZMpUNklbkl1xzkqqXAe4ImuHz+hxPAGPctXw1jPZDX1ijPnZ/aa3bq4Latjla9o8rks+iKDGF1w7g65f87uY1P7XBhj7rKEjUH+vQIFEYFjjbpZThy3MMfmH0Cnl/BuM8HiOZWJs6C4RfEy9jA5L3NmNx6vHxxcSBR8Y8y9Wjy6gZkTrMALTpzsT0/xHrZq6ID350w9/M0Gxa/qQPAXik2eBz4853T3QeA6fUXACCsQdFUsoMT95UVK/7V2z+Ko7g7cpyLyt3o4IZkWmAs4I8A8g9Dqus7jnQL8pNmSRTqJ0afHz8C9uHGoxgO0u9rO450CeAWFbLIX5dVgfXAau4vkgg8G2Tc15dGnAnLu+6mAeL7g0AbcJOtLSaeL1Z9z1VHERy7AcfCIwYE9xiXJ7rc6Q5S3Emfk6fGSm5Srbj8Qmxw7MMoHfDjl7rlcPtqLTj+ZFxtYcVaQxu42/vEbgZxs2E7PIp04gntHGEe0MS2651LYa3zYsJeqtk+GVd8X+UcQOzgvtoiwBbdjTyUmwIFDovz0th+S4fkx3+1EB4OUtogskU3te6mY08Nws3LrYwj0V8wfAs/WCZ/2PFrvClIfMbLjeSScSLDX2584Z0BJUISWLX60YcuJX/PQlbMd8pNcf4mCxoC6lIenCgSTd66O2u7Hb//Bt0LgaZmz9xFbgNtSeLIveUWc6s3EKjM2mT2dJX9tWXhuxCJHgYrnvQ2Gqf93Ap485KtqNh57OnaS6xyBl04dss4Kg0utgy9oS0ujsJNGShEd/zReMwXeGC4LAQZQ+3f8t+wPj92bOFdcq5nSoM3fKaM2ILOi0WCZ/sz+qb3BGvCRlODo7A19Br1lC9SfGUo3CV6DcnsAZ4LuR8DP2K+M+O6UM3P5++nasRKfHTuTNCC8dvBIaHxaUw35nF2N8bDKmRTuqwCuuaMYXV4JtfsiXu1CNHpmxD5lALVCF3lR4vKN48cBXMP7NyipwsMaH0v2I57qOnGMjcdH/2Yzk+CNKWPQyhAd8ntvyyJ3X/4ODOAYJY066dsMYPHB1LpVGR/OBUinZZP0ngZRBsO0QP5vAHd+iYD24ol7irpvE/8grtTcLr3Nk+Iar6H+PIwnsvWGZucvDkd3ozu3CUnO3Dqk/6/wE1votCcrQjzPI6T3F9R9S2IwWS6XlV+GdMEFF1xwwQUXXHDBBVJ3UAuj1JWzo5DiHBAwtOIEWsVhyhAEFIYuR6vAYWjGIRqLkjDhwnjdjcIt++MMYtsA2gEJjrCCAH6h+kVEGixZEWEGTc2qeRZNYArQDLNeEXWTtSp7axZuSYOW6tLXpQ8BCKt0Jp8uecv8MEBFLTZwkiZMY4/gsNQ5iRa0ahmHub6kAUQCmiFFH4FgQ6KZpiX/4CFYaL30Q5fXSwCoICSVDdlI2LDUa2ZAjazDV9flIbin5FrVLRNF3HWzuzw0g4tY6/whx5BgiJF4KpnFGvuCZHt8FmtEQq8lI6GBU46P1DiHbEULEWscNz0VsfgzZkyeJTfvR4C8cWYsYl0wUDePMIjt7gwsXGM/K1cJWKwzzHIBP0yNrbLZMCGW0Q/QMO56DLi+FKPOwVYE11fN4ZqhYzd1iVZRLJMNjSZFMHWsVQObZo2WI+vYCRwssKSgG4Wf0kW8WOtQC9bGWiO1xJVJ+R5LF5TKtcZUljBadbaamEKZcWOmiXl6FLFGpwwtxrpR4xzqQMCDIhrFTRfGwyYna64PwHbE6SnrNaLcoZkSS5CzCZpoduvUJpYqaUjhV2sWBmyC2KpkXIlBh153cQbZkXUZi14ErJM6cErLd4bl4HWXZjQoMdRdYIMShAx1sID+neurBsimNoWwi8vs/wHKXSWtbmOSlgAAAABJRU5ErkJggg=="
                  }
                  width="10%"
                  height="10%"
                  alt="block"
                />
              </span>
              <Details id={item.id} />
            </div>
            <p>{item.title}</p>
            <p>{item.release_date}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlockList;
