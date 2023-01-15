// Copyright 2022 Google LLC.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated file. DO NOT EDIT.

// Package travelimpactmodel provides access to the Travel Impact Model API.
//
// For product documentation, see: https://developers.google.com/travel/impact-model
//
// # Creating a client
//
// Usage example:
//
//	import "google.golang.org/api/travelimpactmodel/v1"
//	...
//	ctx := context.Background()
//	travelimpactmodelService, err := travelimpactmodel.NewService(ctx)
//
// In this example, Google Application Default Credentials are used for authentication.
//
// For information on how to create and obtain Application Default Credentials, see https://developers.google.com/identity/protocols/application-default-credentials.
//
// # Other authentication options
//
// To use an API key for authentication (note: some APIs do not support API keys), use option.WithAPIKey:
//
//	travelimpactmodelService, err := travelimpactmodel.NewService(ctx, option.WithAPIKey("AIza..."))
//
// To use an OAuth token (e.g., a user token obtained via a three-legged OAuth flow), use option.WithTokenSource:
//
//	config := &oauth2.Config{...}
//	// ...
//	token, err := config.Exchange(ctx, ...)
//	travelimpactmodelService, err := travelimpactmodel.NewService(ctx, option.WithTokenSource(config.TokenSource(ctx, token)))
//
// See https://godoc.org/google.golang.org/api/option/ for details on options.
package travelimpactmodel // import "google.golang.org/api/travelimpactmodel/v1"

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"

	googleapi "google.golang.org/api/googleapi"
	internal "google.golang.org/api/internal"
	gensupport "google.golang.org/api/internal/gensupport"
	option "google.golang.org/api/option"
	internaloption "google.golang.org/api/option/internaloption"
	htransport "google.golang.org/api/transport/http"
)

// Always reference these packages, just in case the auto-generated code
// below doesn't.
var _ = bytes.NewBuffer
var _ = strconv.Itoa
var _ = fmt.Sprintf
var _ = json.NewDecoder
var _ = io.Copy
var _ = url.Parse
var _ = gensupport.MarshalJSON
var _ = googleapi.Version
var _ = errors.New
var _ = strings.Replace
var _ = context.Canceled
var _ = internaloption.WithDefaultEndpoint

const apiId = "travelimpactmodel:v1"
const apiName = "travelimpactmodel"
const apiVersion = "v1"
const basePath = "https://travelimpactmodel.googleapis.com/"
const mtlsBasePath = "https://travelimpactmodel.mtls.googleapis.com/"

// NewService creates a new Service.
func NewService(ctx context.Context, opts ...option.ClientOption) (*Service, error) {
	opts = append(opts, internaloption.WithDefaultEndpoint(basePath))
	opts = append(opts, internaloption.WithDefaultMTLSEndpoint(mtlsBasePath))
	client, endpoint, err := htransport.NewClient(ctx, opts...)
	if err != nil {
		return nil, err
	}
	s, err := New(client)
	if err != nil {
		return nil, err
	}
	if endpoint != "" {
		s.BasePath = endpoint
	}
	return s, nil
}

// New creates a new Service. It uses the provided http.Client for requests.
//
// Deprecated: please use NewService instead.
// To provide a custom HTTP client, use option.WithHTTPClient.
// If you are using google.golang.org/api/googleapis/transport.APIKey, use option.WithAPIKey with NewService instead.
func New(client *http.Client) (*Service, error) {
	if client == nil {
		return nil, errors.New("client is nil")
	}
	s := &Service{client: client, BasePath: basePath}
	s.Flights = NewFlightsService(s)
	return s, nil
}

type Service struct {
	client    *http.Client
	BasePath  string // API endpoint base URL
	UserAgent string // optional additional User-Agent fragment

	Flights *FlightsService
}

func (s *Service) userAgent() string {
	if s.UserAgent == "" {
		return googleapi.UserAgent
	}
	return googleapi.UserAgent + " " + s.UserAgent
}

func NewFlightsService(s *Service) *FlightsService {
	rs := &FlightsService{s: s}
	return rs
}

type FlightsService struct {
	s *Service
}

// ComputeFlightEmissionsRequest: Input definition for the
// ComputeFlightEmissions request.
type ComputeFlightEmissionsRequest struct {
	// Flights: Required. Direct flights to return emission estimates for.
	Flights []*Flight `json:"flights,omitempty"`

	// ForceSendFields is a list of field names (e.g. "Flights") to
	// unconditionally include in API requests. By default, fields with
	// empty or default values are omitted from API requests. However, any
	// non-pointer, non-interface field appearing in ForceSendFields will be
	// sent to the server regardless of whether the field is empty or not.
	// This may be used to include empty fields in Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "Flights") to include in
	// API requests with the JSON null value. By default, fields with empty
	// values are omitted from API requests. However, any field with an
	// empty value appearing in NullFields will be sent to the server as
	// null. It is an error if a field in this list has a non-empty value.
	// This may be used to include null fields in Patch requests.
	NullFields []string `json:"-"`
}

func (s *ComputeFlightEmissionsRequest) MarshalJSON() ([]byte, error) {
	type NoMethod ComputeFlightEmissionsRequest
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// ComputeFlightEmissionsResponse: Output definition for the
// ComputeFlightEmissions response.
type ComputeFlightEmissionsResponse struct {
	// FlightEmissions: List of flight legs with emission estimates.
	FlightEmissions []*FlightWithEmissions `json:"flightEmissions,omitempty"`

	// ModelVersion: The model version under which emission estimates for
	// all flights in this response were computed.
	ModelVersion *ModelVersion `json:"modelVersion,omitempty"`

	// ServerResponse contains the HTTP response code and headers from the
	// server.
	googleapi.ServerResponse `json:"-"`

	// ForceSendFields is a list of field names (e.g. "FlightEmissions") to
	// unconditionally include in API requests. By default, fields with
	// empty or default values are omitted from API requests. However, any
	// non-pointer, non-interface field appearing in ForceSendFields will be
	// sent to the server regardless of whether the field is empty or not.
	// This may be used to include empty fields in Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "FlightEmissions") to
	// include in API requests with the JSON null value. By default, fields
	// with empty values are omitted from API requests. However, any field
	// with an empty value appearing in NullFields will be sent to the
	// server as null. It is an error if a field in this list has a
	// non-empty value. This may be used to include null fields in Patch
	// requests.
	NullFields []string `json:"-"`
}

func (s *ComputeFlightEmissionsResponse) MarshalJSON() ([]byte, error) {
	type NoMethod ComputeFlightEmissionsResponse
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// Date: Represents a whole or partial calendar date, such as a
// birthday. The time of day and time zone are either specified
// elsewhere or are insignificant. The date is relative to the Gregorian
// Calendar. This can represent one of the following: * A full date,
// with non-zero year, month, and day values. * A month and day, with a
// zero year (for example, an anniversary). * A year on its own, with a
// zero month and a zero day. * A year and month, with a zero day (for
// example, a credit card expiration date). Related types: *
// google.type.TimeOfDay * google.type.DateTime *
// google.protobuf.Timestamp
type Date struct {
	// Day: Day of a month. Must be from 1 to 31 and valid for the year and
	// month, or 0 to specify a year by itself or a year and month where the
	// day isn't significant.
	Day int64 `json:"day,omitempty"`

	// Month: Month of a year. Must be from 1 to 12, or 0 to specify a year
	// without a month and day.
	Month int64 `json:"month,omitempty"`

	// Year: Year of the date. Must be from 1 to 9999, or 0 to specify a
	// date without a year.
	Year int64 `json:"year,omitempty"`

	// ForceSendFields is a list of field names (e.g. "Day") to
	// unconditionally include in API requests. By default, fields with
	// empty or default values are omitted from API requests. However, any
	// non-pointer, non-interface field appearing in ForceSendFields will be
	// sent to the server regardless of whether the field is empty or not.
	// This may be used to include empty fields in Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "Day") to include in API
	// requests with the JSON null value. By default, fields with empty
	// values are omitted from API requests. However, any field with an
	// empty value appearing in NullFields will be sent to the server as
	// null. It is an error if a field in this list has a non-empty value.
	// This may be used to include null fields in Patch requests.
	NullFields []string `json:"-"`
}

func (s *Date) MarshalJSON() ([]byte, error) {
	type NoMethod Date
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// EmissionsGramsPerPax: Grouped emissions per seating class results.
type EmissionsGramsPerPax struct {
	// Business: Emissions for one passenger in business class in grams.
	// This field is always computed and populated, regardless of whether
	// the aircraft has business class seats or not.
	Business int64 `json:"business,omitempty"`

	// Economy: Emissions for one passenger in economy class in grams. This
	// field is always computed and populated, regardless of whether the
	// aircraft has economy class seats or not.
	Economy int64 `json:"economy,omitempty"`

	// First: Emissions for one passenger in first class in grams. This
	// field is always computed and populated, regardless of whether the
	// aircraft has first class seats or not.
	First int64 `json:"first,omitempty"`

	// PremiumEconomy: Emissions for one passenger in premium economy class
	// in grams. This field is always computed and populated, regardless of
	// whether the aircraft has premium economy class seats or not.
	PremiumEconomy int64 `json:"premiumEconomy,omitempty"`

	// ForceSendFields is a list of field names (e.g. "Business") to
	// unconditionally include in API requests. By default, fields with
	// empty or default values are omitted from API requests. However, any
	// non-pointer, non-interface field appearing in ForceSendFields will be
	// sent to the server regardless of whether the field is empty or not.
	// This may be used to include empty fields in Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "Business") to include in
	// API requests with the JSON null value. By default, fields with empty
	// values are omitted from API requests. However, any field with an
	// empty value appearing in NullFields will be sent to the server as
	// null. It is an error if a field in this list has a non-empty value.
	// This may be used to include null fields in Patch requests.
	NullFields []string `json:"-"`
}

func (s *EmissionsGramsPerPax) MarshalJSON() ([]byte, error) {
	type NoMethod EmissionsGramsPerPax
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// Flight: All details related to a single request item for a direct
// flight emission estimates.
type Flight struct {
	// DepartureDate: Required. Date of the flight in the time zone of the
	// origin airport. Must be a date in the present or future.
	DepartureDate *Date `json:"departureDate,omitempty"`

	// Destination: Required. IATA airport code for flight destination, e.g.
	// "JFK".
	Destination string `json:"destination,omitempty"`

	// FlightNumber: Required. Flight number, e.g. 324.
	FlightNumber int64 `json:"flightNumber,omitempty"`

	// OperatingCarrierCode: Required. IATA carrier code, e.g. "AA".
	OperatingCarrierCode string `json:"operatingCarrierCode,omitempty"`

	// Origin: Required. IATA airport code for flight origin, e.g. "LHR".
	Origin string `json:"origin,omitempty"`

	// ForceSendFields is a list of field names (e.g. "DepartureDate") to
	// unconditionally include in API requests. By default, fields with
	// empty or default values are omitted from API requests. However, any
	// non-pointer, non-interface field appearing in ForceSendFields will be
	// sent to the server regardless of whether the field is empty or not.
	// This may be used to include empty fields in Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "DepartureDate") to include
	// in API requests with the JSON null value. By default, fields with
	// empty values are omitted from API requests. However, any field with
	// an empty value appearing in NullFields will be sent to the server as
	// null. It is an error if a field in this list has a non-empty value.
	// This may be used to include null fields in Patch requests.
	NullFields []string `json:"-"`
}

func (s *Flight) MarshalJSON() ([]byte, error) {
	type NoMethod Flight
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// FlightWithEmissions: Direct flight with emission estimates.
type FlightWithEmissions struct {
	// EmissionsGramsPerPax: Optional. Per-passenger emission estimate
	// numbers. Will not be present if emissions could not be computed. For
	// the list of reasons why emissions could not be computed, see
	// ComputeFlightEmissions.
	EmissionsGramsPerPax *EmissionsGramsPerPax `json:"emissionsGramsPerPax,omitempty"`

	// Flight: Required. Matches the flight identifiers in the request.
	// Note: all IATA codes are capitalized.
	Flight *Flight `json:"flight,omitempty"`

	// ForceSendFields is a list of field names (e.g.
	// "EmissionsGramsPerPax") to unconditionally include in API requests.
	// By default, fields with empty or default values are omitted from API
	// requests. However, any non-pointer, non-interface field appearing in
	// ForceSendFields will be sent to the server regardless of whether the
	// field is empty or not. This may be used to include empty fields in
	// Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "EmissionsGramsPerPax") to
	// include in API requests with the JSON null value. By default, fields
	// with empty values are omitted from API requests. However, any field
	// with an empty value appearing in NullFields will be sent to the
	// server as null. It is an error if a field in this list has a
	// non-empty value. This may be used to include null fields in Patch
	// requests.
	NullFields []string `json:"-"`
}

func (s *FlightWithEmissions) MarshalJSON() ([]byte, error) {
	type NoMethod FlightWithEmissions
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// ModelVersion: Travel Impact Model version. For more information about
// the model versioning see
// https://github.com/google/travel-impact-model/#versioning.
type ModelVersion struct {
	// Dated: Dated versions: Model datasets are recreated with refreshed
	// input data but no change to the algorithms regularly.
	Dated string `json:"dated,omitempty"`

	// Major: Major versions: Major changes to methodology (e.g. adding new
	// data sources to the model that lead to major output changes). Such
	// changes will be infrequent and announced well in advance. Might
	// involve API version changes, which will respect guidelines in
	// https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible
	Major int64 `json:"major,omitempty"`

	// Minor: Minor versions: Changes to the model that, while being
	// consistent across schema versions, change the model parameters or
	// implementation.
	Minor int64 `json:"minor,omitempty"`

	// Patch: Patch versions: Implementation changes meant to address bugs
	// or inaccuracies in the model implementation.
	Patch int64 `json:"patch,omitempty"`

	// ForceSendFields is a list of field names (e.g. "Dated") to
	// unconditionally include in API requests. By default, fields with
	// empty or default values are omitted from API requests. However, any
	// non-pointer, non-interface field appearing in ForceSendFields will be
	// sent to the server regardless of whether the field is empty or not.
	// This may be used to include empty fields in Patch requests.
	ForceSendFields []string `json:"-"`

	// NullFields is a list of field names (e.g. "Dated") to include in API
	// requests with the JSON null value. By default, fields with empty
	// values are omitted from API requests. However, any field with an
	// empty value appearing in NullFields will be sent to the server as
	// null. It is an error if a field in this list has a non-empty value.
	// This may be used to include null fields in Patch requests.
	NullFields []string `json:"-"`
}

func (s *ModelVersion) MarshalJSON() ([]byte, error) {
	type NoMethod ModelVersion
	raw := NoMethod(*s)
	return gensupport.MarshalJSON(raw, s.ForceSendFields, s.NullFields)
}

// method id "travelimpactmodel.flights.computeFlightEmissions":

type FlightsComputeFlightEmissionsCall struct {
	s                             *Service
	computeflightemissionsrequest *ComputeFlightEmissionsRequest
	urlParams_                    gensupport.URLParams
	ctx_                          context.Context
	header_                       http.Header
}

// ComputeFlightEmissions: Stateless method to retrieve emission
// estimates. Details on how emission estimates are computed:
// https://github.com/google/travel-impact-model The response will
// contain all entries that match the input flight legs, in the same
// order. If there are no estimates available for a certain flight leg,
// the response will return the flight leg object with empty emission
// fields. The request will still be considered successful. Reasons for
// missing emission estimates include: - The flight is unknown to the
// server. - The input flight leg is missing one or more identifiers. -
// The flight date is in the past. - The aircraft type is not supported
// by the model. - Missing seat configuration. The request can contain
// up to 1000 flight legs. If the request has more than 1000 direct
// flights, if will fail with an INVALID_ARGUMENT error.
func (r *FlightsService) ComputeFlightEmissions(computeflightemissionsrequest *ComputeFlightEmissionsRequest) *FlightsComputeFlightEmissionsCall {
	c := &FlightsComputeFlightEmissionsCall{s: r.s, urlParams_: make(gensupport.URLParams)}
	c.computeflightemissionsrequest = computeflightemissionsrequest
	return c
}

// Fields allows partial responses to be retrieved. See
// https://developers.google.com/gdata/docs/2.0/basics#PartialResponse
// for more information.
func (c *FlightsComputeFlightEmissionsCall) Fields(s ...googleapi.Field) *FlightsComputeFlightEmissionsCall {
	c.urlParams_.Set("fields", googleapi.CombineFields(s))
	return c
}

// Context sets the context to be used in this call's Do method. Any
// pending HTTP request will be aborted if the provided context is
// canceled.
func (c *FlightsComputeFlightEmissionsCall) Context(ctx context.Context) *FlightsComputeFlightEmissionsCall {
	c.ctx_ = ctx
	return c
}

// Header returns an http.Header that can be modified by the caller to
// add HTTP headers to the request.
func (c *FlightsComputeFlightEmissionsCall) Header() http.Header {
	if c.header_ == nil {
		c.header_ = make(http.Header)
	}
	return c.header_
}

func (c *FlightsComputeFlightEmissionsCall) doRequest(alt string) (*http.Response, error) {
	reqHeaders := make(http.Header)
	reqHeaders.Set("x-goog-api-client", "gl-go/"+gensupport.GoVersion()+" gdcl/"+internal.Version)
	for k, v := range c.header_ {
		reqHeaders[k] = v
	}
	reqHeaders.Set("User-Agent", c.s.userAgent())
	var body io.Reader = nil
	body, err := googleapi.WithoutDataWrapper.JSONReader(c.computeflightemissionsrequest)
	if err != nil {
		return nil, err
	}
	reqHeaders.Set("Content-Type", "application/json")
	c.urlParams_.Set("alt", alt)
	c.urlParams_.Set("prettyPrint", "false")
	urls := googleapi.ResolveRelative(c.s.BasePath, "v1/flights:computeFlightEmissions")
	urls += "?" + c.urlParams_.Encode()
	req, err := http.NewRequest("POST", urls, body)
	if err != nil {
		return nil, err
	}
	req.Header = reqHeaders
	return gensupport.SendRequest(c.ctx_, c.s.client, req)
}

// Do executes the "travelimpactmodel.flights.computeFlightEmissions" call.
// Exactly one of *ComputeFlightEmissionsResponse or error will be
// non-nil. Any non-2xx status code is an error. Response headers are in
// either *ComputeFlightEmissionsResponse.ServerResponse.Header or (if a
// response was returned at all) in error.(*googleapi.Error).Header. Use
// googleapi.IsNotModified to check whether the returned error was
// because http.StatusNotModified was returned.
func (c *FlightsComputeFlightEmissionsCall) Do(opts ...googleapi.CallOption) (*ComputeFlightEmissionsResponse, error) {
	gensupport.SetOptions(c.urlParams_, opts...)
	res, err := c.doRequest("json")
	if res != nil && res.StatusCode == http.StatusNotModified {
		if res.Body != nil {
			res.Body.Close()
		}
		return nil, gensupport.WrapError(&googleapi.Error{
			Code:   res.StatusCode,
			Header: res.Header,
		})
	}
	if err != nil {
		return nil, err
	}
	defer googleapi.CloseBody(res)
	if err := googleapi.CheckResponse(res); err != nil {
		return nil, gensupport.WrapError(err)
	}
	ret := &ComputeFlightEmissionsResponse{
		ServerResponse: googleapi.ServerResponse{
			Header:         res.Header,
			HTTPStatusCode: res.StatusCode,
		},
	}
	target := &ret
	if err := gensupport.DecodeResponse(target, res); err != nil {
		return nil, err
	}
	return ret, nil
	// {
	//   "description": "Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.",
	//   "flatPath": "v1/flights:computeFlightEmissions",
	//   "httpMethod": "POST",
	//   "id": "travelimpactmodel.flights.computeFlightEmissions",
	//   "parameterOrder": [],
	//   "parameters": {},
	//   "path": "v1/flights:computeFlightEmissions",
	//   "request": {
	//     "$ref": "ComputeFlightEmissionsRequest"
	//   },
	//   "response": {
	//     "$ref": "ComputeFlightEmissionsResponse"
	//   }
	// }

}